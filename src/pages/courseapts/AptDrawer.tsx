import React from 'react';
import {observer} from "mobx-react-lite";
import {Button, Col, Drawer, DrawerProps, Grid, Modal, Panel, Row, Stack} from "rsuite";
import {useStores} from "@/hooks/useStores";
import {Apt, TestCase} from "@/data/model/Apt";
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactMarkdown from "react-markdown";
import {SubmissionsCard} from "@/pages/courseapts/SubmissionsCard";


export interface AptDrawerProps extends DrawerProps {
    apt?: Apt;
    shouldAnimateSubmissions: boolean;
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
                                    <SubmissionsCard apt={apt} shouldAnimate={props.shouldAnimateSubmissions}/>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 12, width: "100%" }}>
                                <Col xs={24} md={24}>
                                    <QuizCard apt={apt} />
                                </Col>
                            </Row>
                        </Grid>
                    </Panel>
                </div>
            </Drawer.Body>
        </Drawer>
    );
});



const QuizCard = observer((props: { apt?: Apt }) => {

    const apt = props.apt;

    if(!apt) return null;

    const [open, setOpen] = React.useState(false);

    const [currentTestCase, setCurrentTestCase] = React.useState(apt.testCases[0]);
    const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = React.useState(false);
    const [isNextSelected, setIsNextSelected] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const WrongAnswerButton = observer((props: { answer: string, onClick?: () => void }) => {
        const [isClicked, setIsClicked] = React.useState(false);
        //const [ isNextSelected, setIsNextSelected ] = React.useState(false);


        const handleOnClick = () => {
            setIsClicked(true);
            if (props.onClick) props.onClick();
        }

        return (
            <Button
                disabled= {disableButton()}
                className={`quiz-answer-option ${isClicked ? "incorrect" : ""} `}
                onClick={handleOnClick}>{props.answer}
                
            </Button>
        )
    });

    const disableButton = () => {
        if (isCorrectAnswerSelected) {
            return true;
        } else {
            return false;
        }
    }

    const handleCorrectClick = () => {
        setIsCorrectAnswerSelected(true);

    };

    const handleIncorrectClick = () => {
        if (isNextSelected) {
            setIsNextSelected(false);
        }

    };

    const handleNextButton = () => {
        //check for next test
        //if next test exists, set current test to next test
        //if next test does not exist, close modal
        //reset isCorrectAnswerSelected to false
        //used to set buttons to default when next is clicked
        for (let i = 0; i < apt.testCases.length; i++) {
            if (apt.testCases[i] === currentTestCase) {
                if (i < apt.testCases.length - 1) {
                    setCurrentTestCase(apt.testCases[i + 1]);
                } else {
                    handleClose();
                    setCurrentTestCase(apt.testCases[0]);
                }
                setIsNextSelected(true);
            }
        }
        setIsCorrectAnswerSelected(false);
        setIsNextSelected(false);

    };

    function renderAnswerOptions(testCase: TestCase) {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={8}>
                        <Button
                            className={`quiz-answer-option ${isCorrectAnswerSelected ? "correct" : ""}`}
                            onClick={handleCorrectClick}>{testCase.expectedOutput}</Button>
                    </Col>
                    {testCase.reasonableWrongOutputs.map((output) => {
                        return (
                            <Col xs={12} md={8}>
                                <WrongAnswerButton answer={output} onClick={handleIncorrectClick} />
                            </Col>
                        )
                    })}
                </Row>
            </Grid>
        );
    }

    return <Panel
        className={"apt-card-section"}
        header={
            <h4>Test your knowledge</h4>
        }
    >
        <Button size="lg" onClick={handleOpen}> Quiz</Button>
        <Modal autoFocus={true} open={open} backdrop="static" size="lg" onClose={handleClose}
            backdropClassName="quiz-modal-backdrop"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}>
            <Modal.Header>
                <Modal.Title><h2>Concept Quiz</h2></Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <h4>{`Test case ${currentTestCase.testNumber}`} / {apt.testCases.length}
                </h4>
            </Modal.Body>
            <Modal.Body>
                <h3>{currentTestCase.input}</h3>
            </Modal.Body>
            <Modal.Body>
                {renderAnswerOptions(currentTestCase)}
            </Modal.Body>
            <Modal.Footer>
                <Button size = "lg" onClick={handleNextButton}>Next </Button>
            </Modal.Footer>
        </Modal>
    </Panel>
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


