import React from 'react';
import { observer } from "mobx-react-lite";
import { Col, Drawer, DrawerProps, Grid, Panel, PanelGroup, Row, Stack } from "rsuite";
import { useStores } from "@/hooks/useStores";
import { Apt, TestCase } from "@/data/model/Apt";
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactMarkdown from "react-markdown";
import WarningRoundIcon from '@rsuite/icons/WarningRound';
import CheckRoundIcon from '@rsuite/icons/CheckRound';
import { PerformanceGraph } from "@/components/graphs/PerformanceGraph";
import { memoryData, PerformanceData, runtimeData } from "@/data/ProblemSetsData";
import { SubmitButton } from "@/components/Buttons/SubmitButton";
//import {QuizButton} from "@/components/Buttons/QuizButton";
import { Button, ButtonToolbar, Modal } from 'rsuite';




export interface AptDrawerProps extends DrawerProps {
    apt?: Apt;
}

export const AptDrawer = observer((props: AptDrawerProps) => {

    const { apt } = props;
    console.log("AptDrawer: " + apt?.name);

    const { courseAptsStore } = useStores();

    // @ts-ignore
    return (
        <Drawer {...props} size="full" onClose={() => courseAptsStore.closeDrawer()}>
            <Drawer.Body>
                <div style={{ marginTop: 32 }}>
                    <h2>
                        {apt?.name}
                    </h2>

                    <Panel
                        className="apt-card"
                    >
                        <Grid>
                            <Row gutter={24}>
                                <Col xs={24} md={12} style={{ marginBottom: 12 }}>
                                    <ProblemStatementCard problemStatement={apt?.problemStatement} />
                                </Col>
                                <Col xs={24} md={12} style={{ marginBottom: 12 }}>
                                    <ClassCodeCard classCode={apt?.classCode} />
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 12, width: "100%" }}>
                                <Col xs={24} md={24}>
                                    <ConstraintsCard constraints={apt?.constraints} />
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 12, width: "100%" }}>
                                <Col xs={24} md={24}>
                                    <SubmissionsCard apt={apt} />
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 12, width: "100%" }}>
                                <Col xs={24} md={24}>
                                    <QuizCard />
                                </Col>
                            </Row>
                        </Grid>
                    </Panel>
                </div>
            </Drawer.Body>
        </Drawer>
    );
});


const QuizCard = observer(() => {
    const [open, setOpen] = React.useState(false);
    const [backdrop, setBackdrop] = React.useState('static');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //const [noanswer, Correct] = React.useState(false)
    const isCorrect = (event) => {
        event.target.style.backgroundColor = 'green'
    };
    const isIncorrect = (event) => {
        event.target.style.backgroundColor = 'red'
    };

    return <Panel
        className={"apt-card-section"}
        header={
            <h4>Test your knowledge</h4>
        }
    >
        <Button size="lg" onClick={handleOpen}> Quiz</Button>
        <Modal autoFocus={true} open={open} backdrop="static" size="lg" onClose={handleClose}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}>
            <Modal.Header>
                <Modal.Title><h2>Concept Quiz</h2></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>This is an example question. This is just a placeholder. </h3>
            </Modal.Body>
            <Modal.Body>
                <Row className="show-grid">
                    <Col xs={6}>
                    <Button onClick={isCorrect} appearance="primary">
                        Option 1
                    </Button>
                    </Col>
                    <Col xs={6}>
                    <Button onClick={isIncorrect} appearance="primary">
                        Option 2
                    </Button>
                    </Col>
                    <Col xs={6}>
                    <Button onClick={isIncorrect} appearance="primary">
                        Option 3
                    </Button>
                    </Col>
                </Row>
                <Modal.Body>
                </Modal.Body>
                <Row className="show-grid">
                    <Col xs={6}>
                    <Button onClick={isIncorrect} appearance="primary">
                        Option 4
                    </Button>
                    </Col>
                    <Col xs={6}>
                    <Button onClick={isIncorrect} appearance="primary">
                        Option 5
                    </Button>
                    </Col>
                    <Col xs={6}>
                    <Button onClick={isIncorrect} appearance="primary">
                        Option 6
                    </Button>
                    </Col>
                </Row>
                </Modal.Body>
        </Modal>
    </Panel>
});

const SubmissionsCard = observer((props: { apt?: Apt }) => {

    const testCases = props.apt?.testCases;

    const { courseAptsStore } = useStores();

    function renderHeader(testCase: TestCase) {
        return (
            <Stack spacing={8}>
                {`Test case ${testCase.testNumber}`}
                {testCase.submission && testCase.submission.userOutput === testCase.expectedOutput &&
                    <CheckRoundIcon style={{ marginTop: -4 }} color="green" />}
                {testCase.submission && testCase.submission.userOutput !== testCase.expectedOutput &&
                    <WarningRoundIcon style={{ marginTop: -4 }} color="red" />}
            </Stack>
        );
    }


    return (<Panel
        className={"apt-card-section"}
        header={
            <Stack justifyContent="space-between" style={{ marginRight: 16 }}>
                <h4>Your submission</h4>
                <SubmitButton onClick={() => courseAptsStore.openSubmitFileModal(props.apt)} />
            </Stack>
        }
    >
        <PanelGroup accordion >
            {testCases && testCases.map((testCase: TestCase) => {
                return (
                    <Panel header={renderHeader(testCase)}>
                        <Grid style={{ width: "100%" }}>
                            <Row gutter={24}>
                                <Col xs={24} md={6}>
                                    <Stack direction="column" alignItems="flex-start">
                                        <b style={{ paddingLeft: 12 }}>Input</b>
                                        <Stack.Item style={{ width: "100%" }}>
                                            <div className="input-output-box">{testCase.input}</div>
                                        </Stack.Item>
                                        <b style={{ paddingLeft: 12 }}>Expected output</b>
                                        <Stack.Item style={{ width: "100%" }}>
                                            <div className="input-output-box">{testCase.expectedOutput}</div>
                                        </Stack.Item>
                                        <b style={{ paddingLeft: 12 }}>Your output</b>
                                        <Stack.Item style={{ width: "100%" }}>
                                            <div className="input-output-box">{testCase.submission.userOutput}</div>
                                        </Stack.Item>
                                    </Stack>
                                </Col>
                                <Col xs={24} md={18}>
                                    <Stack direction="column" alignItems="flex-start">
                                        {testCase.explanation && <><b>Explanation</b>
                                            <p>{testCase.explanation}</p></>}
                                        <div style={{ marginTop: testCase.explanation ? 18 : 0 }}><b>Runtime performance</b></div>
                                        <Stack.Item style={{ width: "100%", marginTop: -8 }}>
                                            <Row gutter={32}>
                                                <Col xs={24} md={12}>
                                                    <PerformanceGraph
                                                        height={75}
                                                        userValue={testCase.submission.runtime}
                                                        data={runtimeData.get(testCase.id)}
                                                        labels={[]}
                                                    />
                                                    <Stack.Item style={{ width: "100%" }}>
                                                        <Stack justifyContent="space-between">
                                                            <Stack spacing={8}>
                                                                <span className="performance-title">Runtime</span>
                                                                <b>{testCase.submission.runtime + " ms"}</b>
                                                            </Stack>
                                                            <Stack spacing={8}>
                                                                <span style={{ color: "#575757" }}>Beats</span>
                                                                <span style={{
                                                                    background: "#2589F5",
                                                                    borderRadius: 12,
                                                                    paddingTop: 5,
                                                                    paddingBottom: 5,
                                                                    paddingLeft: 8,
                                                                    paddingRight: 8,
                                                                    width: "100%",
                                                                    color: "white"
                                                                }}><b>{computeBeats(testCase.submission.runtime, runtimeData.get(testCase.id))}</b></span>
                                                            </Stack>
                                                        </Stack>
                                                    </Stack.Item>
                                                </Col>
                                                <Col xs={24} md={12}>
                                                    <PerformanceGraph
                                                        height={75}
                                                        userValue={testCase.submission.memory}
                                                        data={memoryData.get(testCase.id)}
                                                        labels={[]}
                                                        highlightColor={"#FFC107"}
                                                    />
                                                    <Stack.Item style={{ width: "100%" }}>
                                                        <Stack justifyContent="space-between">
                                                            <Stack spacing={8}>
                                                                <span className="performance-title">Memory</span>
                                                                <b>{testCase.submission.memory + " MB"}</b>
                                                            </Stack>
                                                            <Stack spacing={8}>
                                                                <span style={{ color: "#575757" }}>Beats</span>
                                                                <span style={{
                                                                    background: "#FFC107",
                                                                    borderRadius: 12,
                                                                    paddingTop: 5,
                                                                    paddingBottom: 5,
                                                                    paddingLeft: 8,
                                                                    paddingRight: 8,
                                                                    width: "100%",
                                                                    color: "white"
                                                                }}><b>{computeBeats(testCase.submission.memory, memoryData.get(testCase.id))}</b></span>
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
                    </Panel>)
            })
            }
        </PanelGroup>
    </Panel>);
});

const ClassCodeCard = observer((props: { classCode?: string }) => {
    return <Panel
        className={"apt-card-section"}
        header={
            <Stack style={{ marginBottom: -24 }} justifyContent="space-between">
                <h4>Class</h4>
            </Stack>
        }>
        <SyntaxHighlighter language="java">
            {props.classCode}
        </SyntaxHighlighter>
    </Panel>;
});

const ProblemStatementCard = observer((props: { problemStatement?: string }) => {
    return <Panel
        className={"apt-card-section"}
        header={
            <Stack justifyContent="space-between">
                <h4>Problem statement</h4>
            </Stack>
        }>
        {props.problemStatement &&
            <ReactMarkdown>
                {props.problemStatement}
            </ReactMarkdown>
        }
    </Panel>;
});



const ConstraintsCard = observer((props: { constraints?: string }) => {
    return <Panel
        className={"apt-card-section"}
        header={<h4>Constraints</h4>}
    >
        {props.constraints &&
            <ReactMarkdown>
                {props.constraints}
            </ReactMarkdown>
        }
    </Panel>;
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