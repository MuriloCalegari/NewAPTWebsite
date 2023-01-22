import React from 'react';
import {observer} from "mobx-react-lite";
import {Col, Drawer, DrawerProps, FlexboxGrid, Grid, Panel, PanelGroup, Row, Stack} from "rsuite";
import {useStores} from "@/hooks/useStores";
import {Apt, TestCase} from "@/data/model/Apt";
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactMarkdown from "react-markdown";
import WarningRoundIcon from '@rsuite/icons/WarningRound';
import CheckRoundIcon from '@rsuite/icons/CheckRound';
import {RuntimeGraph} from "@/components/graphs/RuntimeGraph";
import {runtimeData} from "@/data/ProblemSetsData";

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
                <div style={{marginTop: 32}}>
                    <h2>
                        {apt?.name}
                    </h2>

                    <Panel
                        style={{backgroundColor: "#F7F7FA"}}
                        className="card"
                    >
                        <FlexboxGrid>
                            <Row gutter={24}>
                                <Col xs={24} md={12} style={{marginBottom: 12}}>
                                    <ProblemStatementCard problemStatement={apt?.problemStatement}/>
                                </Col>
                                <Col xs={24} md={12} style={{marginBottom: 12}}>
                                    <ClassCodeCard classCode={apt?.classCode}/>
                                </Col>
                            </Row>
                            <Row style={{marginTop: 12, width: "100%"}}>
                                <Col xs={24} md={24}>
                                    <ConstraintsCard constraints={apt?.constraints}/>
                                </Col>
                            </Row>
                            <Row style={{marginTop: 12, width: "100%"}}>
                                <Col xs={24} md={24}>
                                    <SubmissionsCard testCases={apt?.testCases}/>
                                </Col>
                            </Row>
                        </FlexboxGrid>
                    </Panel>
                </div>
            </Drawer.Body>
        </Drawer>
    );
});

const ConstraintsCard = observer((props: { constraints?: string }) => {
    return <Panel
        style={{backgroundColor: "white"}}
        header={<h4>Constraints</h4>}
    >
        {props.constraints &&
            <ReactMarkdown>
                {props.constraints}
            </ReactMarkdown>
        }
    </Panel>;
});

const SubmissionsCard = observer((props : { testCases?: TestCase[] }) => {

    const { testCases } = props;

    function renderHeader(testCase: TestCase) {
        return (
            <Stack spacing={8}>
                <span style={{color: "#575757"}}>{`Test case ${testCase.testNumber}`}</span>
                {testCase.submission && testCase.submission.userOutput === testCase.expectedOutput &&
                    <CheckRoundIcon style={{marginTop: -4}} color="green"/>}
                {testCase.submission && testCase.submission.userOutput !== testCase.expectedOutput &&
                <WarningRoundIcon style={{marginTop: -4}} color="red"/>}
            </Stack>
        );
    }

    return (<Panel
        style={{backgroundColor: "white"}}
        header={<h4>Your submission</h4>}
    >
        <PanelGroup accordion >
            {testCases && testCases.map((testCase: TestCase) => {
                console.log("testCase: " + testCase.testNumber);
                console.log(runtimeData);
                console.log({aptId: testCase.aptId, testCaseNumber: testCase.testNumber})
                console.log(runtimeData.get(testCase.id))

                return (
                    <Panel header={renderHeader(testCase)}>
                        <Grid style={{width: "100%"}}>
                            <Row gutter={24}>
                                <Col xs={24} md={6}>
                                    <Stack direction="column" alignItems="flex-start">
                                        <b style={{paddingLeft: 12}}>Input</b>
                                        <Stack.Item style={{width: "100%"}}>
                                            <div style={{
                                                background: "#F7F7FA",
                                                borderRadius: 12,
                                                padding: 12,
                                                marginBottom: 12
                                            }}>{testCase.input}</div>
                                        </Stack.Item>
                                        <b style={{paddingLeft: 12}}>Expected output</b>
                                        <Stack.Item style={{width: "100%"}}>
                                            <div style={{
                                                background: "#F7F7FA",
                                                borderRadius: 12,
                                                padding: 12,
                                                width: "100%",
                                                marginBottom: 12
                                            }}>{testCase.expectedOutput}</div>
                                        </Stack.Item>
                                        <b style={{paddingLeft: 12}}>Your output</b>
                                        <Stack.Item style={{width: "100%"}}>
                                            <div style={{
                                                background: "#F7F7FA",
                                                borderRadius: 12,
                                                padding: 12,
                                                width: "100%",
                                            }}>{testCase.submission.userOutput}</div>
                                        </Stack.Item>
                                    </Stack>
                                </Col>
                                <Col xs={24} md={18}>
                                    <Stack direction="column" alignItems="flex-start">
                                        <b>Explanation</b>
                                        <p>{testCase.explanation}</p>
                                        <Stack.Item style={{width: "100%"}}>
                                            <RuntimeGraph
                                                height={150}
                                                userRuntime={testCase.submission.runtime}
                                                runtimeData={runtimeData.get(testCase.id)}
                                                labels={["0", "2", "4", "5", "2", "1", "10", "16", "32", "25", "10", "25", "3", "2", "4", "4", "1", "3", "2", "0"]}
                                            />
                                        </Stack.Item>
                                    </Stack>
                                </Col>
                            </Row>
                        </Grid>
                    </Panel>)})
            }
        </PanelGroup>
    </Panel>);
});

const ClassCodeCard = observer((props: { classCode?: string }) => {
    return <Panel
        style={{backgroundColor: "white"}}
        header={
            <Stack style={{marginBottom: -24}} justifyContent="space-between">
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
        style={{backgroundColor: "white"}}
        header={
            <Stack justifyContent="space-between">
                <h4>Problem statement</h4>
            </Stack>
        }>
        <p>{props.problemStatement}</p>
    </Panel>;
});