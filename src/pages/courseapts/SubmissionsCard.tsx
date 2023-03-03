import {observer} from "mobx-react-lite";
import {Apt, TestCase} from "@/data/model/Apt";
import {useStores} from "@/hooks/useStores";
import {Col, Grid, Panel, PanelGroup, Row, Stack} from "rsuite";
import CheckRoundIcon from "@rsuite/icons/CheckRound";
import WarningRoundIcon from "@rsuite/icons/WarningRound";
import {SubmitButton} from "@/components/Buttons/SubmitButton";
import {PerformanceGraph} from "@/components/graphs/PerformanceGraph";
import {memoryData, PerformanceData, runtimeData} from "@/data/ProblemSetsData";
import React, {useEffect} from "react";
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import useSound from "use-sound";
// @ts-ignore
import computingSound from "@/media/animations/classic-computing-sound.mp3";

export interface SubmissionsCardProps {
    apt?: Apt;
    shouldAnimate: boolean;
}

export const SubmissionsCard = observer((props: SubmissionsCardProps) => {

    const testCases = props.apt?.testCases;

    const {courseAptsStore} = useStores();

    const [ playComputingSound ] = useSound(computingSound, { volume: 0.25 });
    const panelRef = React.useRef(null);

    // Play sound and scroll screen to Submissions card if we are animating it.
    if(props.shouldAnimate) {
        setTimeout(() => {
            // @ts-ignore
            panelRef?.current?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
            playComputingSound();
        }, 350);
    }

    return (<Panel
        className={"apt-card-section"}
        header={
            <Stack justifyContent="space-between" style={{marginRight: 16}}>
                <h4>Your submission</h4>
                <SubmitButton onClick={() => courseAptsStore.openSubmitFileModal(props.apt)}/>
            </Stack>
        }
        ref={panelRef}
    >
        <PanelGroup accordion>
            {testCases && testCases.map((testCase: TestCase) => {
                return (
                    <TestCasePanel testCase={testCase} shouldAnimate={props.shouldAnimate}/>)
            })
            }
        </PanelGroup>
    </Panel>);
});

export const TestCasePanel = observer((props: { testCase: TestCase, shouldAnimate: boolean }) => {

    // If it shouldn't animate, then we treat it as it has already run
    const [ hasAnimationRun, setHasAnimationRun ] = React.useState(!props.shouldAnimate);

    // Force react ro rerender component if shouldAnimate changes,
    // like when we try to see submission results after sending a file when the drawer was already open
    useEffect(() => {
        setHasAnimationRun(!props.shouldAnimate)
    }, [props.shouldAnimate, props.testCase]);

    function renderHeader(testCase: TestCase) {
        return (
            <Stack spacing={8}>
                {`Test case ${testCase.testNumber}`}
                {testCase.submission && testCase.submission.userOutput === testCase.expectedOutput &&
                    <CheckRoundIcon style={{marginTop: -4}} color="green"/>}
                {testCase.submission && testCase.submission.userOutput !== testCase.expectedOutput &&
                    <WarningRoundIcon style={{marginTop: -4}} color="red"/>}
            </Stack>
        );
    }

    function renderPanel() {
        return <Panel header={renderHeader(props.testCase)}>
            <Grid style={{width: "100%"}}>
                <Row gutter={24}>
                    <Col xs={24} md={6}>
                        <Stack direction="column" alignItems="flex-start">
                            <b style={{paddingLeft: 12}}>Input</b>
                            <Stack.Item style={{width: "100%"}}>
                                <div className="input-output-box">{props.testCase.input}</div>
                            </Stack.Item>
                            <b style={{paddingLeft: 12}}>Expected output</b>
                            <Stack.Item style={{width: "100%"}}>
                                <div className="input-output-box">{props.testCase.expectedOutput}</div>
                            </Stack.Item>
                            <b style={{paddingLeft: 12}}>Your output</b>
                            <Stack.Item style={{width: "100%"}}>
                                <div className="input-output-box">{props.testCase.submission.userOutput}</div>
                            </Stack.Item>
                        </Stack>
                    </Col>
                    <Col xs={24} md={18}>
                        <Stack direction="column" alignItems="flex-start">
                            {props.testCase.explanation && <><b>Explanation</b>
                                <p>{props.testCase.explanation}</p></>}
                            <div style={{marginTop: props.testCase.explanation ? 18 : 0}}><b>Runtime
                                performance</b></div>
                            <Stack.Item style={{width: "100%", marginTop: -8}}>
                                <Row gutter={32}>
                                    <Col xs={24} md={12}>
                                        <PerformanceGraph
                                            height={75}
                                            userValue={props.testCase.submission.runtime}
                                            data={runtimeData.get(props.testCase.id)}
                                            labels={[]}
                                        />
                                        <Stack.Item style={{width: "100%"}}>
                                            <Stack justifyContent="space-between">
                                                <Stack spacing={8}>
                                                    <span className="performance-title">Runtime</span>
                                                    <b>{props.testCase.submission.runtime + " ms"}</b>
                                                </Stack>
                                                <Stack spacing={8}>
                                                    <span style={{color: "#575757"}}>Beats</span>
                                                    <span style={{
                                                        background: "#2589F5",
                                                        borderRadius: 12,
                                                        paddingTop: 5,
                                                        paddingBottom: 5,
                                                        paddingLeft: 8,
                                                        paddingRight: 8,
                                                        width: "100%",
                                                        color: "white"
                                                    }}><b>{computeBeats(props.testCase.submission.runtime, runtimeData.get(props.testCase.id))}</b></span>
                                                </Stack>
                                            </Stack>
                                        </Stack.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <PerformanceGraph
                                            height={75}
                                            userValue={props.testCase.submission.memory}
                                            data={memoryData.get(props.testCase.id)}
                                            labels={[]}
                                            highlightColor={"#FFC107"}
                                        />
                                        <Stack.Item style={{width: "100%"}}>
                                            <Stack justifyContent="space-between">
                                                <Stack spacing={8}>
                                                    <span className="performance-title">Memory</span>
                                                    <b>{props.testCase.submission.memory + " MB"}</b>
                                                </Stack>
                                                <Stack spacing={8}>
                                                    <span style={{color: "#575757"}}>Beats</span>
                                                    <span style={{
                                                        background: "#FFC107",
                                                        borderRadius: 12,
                                                        paddingTop: 5,
                                                        paddingBottom: 5,
                                                        paddingLeft: 8,
                                                        paddingRight: 8,
                                                        width: "100%",
                                                        color: "white"
                                                    }}><b>{computeBeats(props.testCase.submission.memory, memoryData.get(props.testCase.id))}</b></span>
                                                </Stack>
                                            </Stack>
                                        </Stack.Item>
                                    </Col>
                                </Row>
                            </Stack.Item>
                        </Stack>
                    </Col>
                </Row>
            </Grid>
        </Panel>;
    }

    function renderPanelWithTemporaryAnimation() {

        setTimeout(() => {
            setHasAnimationRun(true);
        }, 1350);

        return (
            <GlitchText>
                <GlitchSquiggly className={"glitch-squiggly"}>
                    {renderPanel()}
                </GlitchSquiggly>
            </GlitchText>
        );
    }

    return (
        !hasAnimationRun ?
            renderPanelWithTemporaryAnimation() :
        renderPanel()
    );
});

function computeBeats(userPerformance: number, performanceData: PerformanceData | undefined) {
    if (performanceData) {
        const intervalSize = (performanceData.endingValue - performanceData.startingValue) / performanceData.overallData.length;

        const intervalIndex = Math.floor(userPerformance / intervalSize);

        let beats = 0;
        let totalValue = 0;

        for (let i = 0; i < performanceData.overallData.length; i++) {
            if (i < intervalIndex) beats += performanceData.overallData[i];
            totalValue += performanceData.overallData[i];
        }

        // rounds the value to 2 decimal places
        return Math.round(beats / totalValue * 10000) / 100 + "%";
    }
    return 0;
}