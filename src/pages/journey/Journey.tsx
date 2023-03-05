import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Col, FlexboxGrid, Grid, IconButton, Panel, Row } from "rsuite";
import { MDXProvider } from "@mdx-js/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { chapterParts } from "@/pages/textbook/chapters/chapters";
import PageContent from "@/components/PageContent";
import ReactMarkdown from "react-markdown";
import ArrowBackIcon from '@rsuite/icons/ArowBack';
import { unary } from "lodash";

export const Journey = observer(() => {

    const location = useLocation();
    const { chapter } = useParams();
    const navigate = useNavigate();

    console.log(location);
    console.log(chapter)

    const [isCurrent1, setIsCurrent1] = React.useState(true);
    const [isCurrent2, setIsCurrent2] = React.useState(false);
    const [isCurrent3, setIsCurrent3] = React.useState(false);

    const [isPath1, setIsPath1] = React.useState(false);
    const [isPath2, setIsPath2] = React.useState(false);
    const [isPath3, setIsPath3] = React.useState(false);

    const [isPath4, setIsPath4] = React.useState(false);
    const [isPath5, setIsPath5] = React.useState(false);
    const [isPath6, setIsPath6] = React.useState(false);

    const [placeholdQ1, setPlaceholdQ1] = React.useState(false);
    const [placeholdQ2, setPlaceholdQ2] = React.useState(false);
    const [placeholdQ3, setPlaceholdQ3] = React.useState(false);

    const [placeholdPath1, setPlaceholdPath1] = React.useState(false);
    const [placeholdPath2, setPlaceholdPath2] = React.useState(false);
 

    const i = 0;

    //const handleOpen = () => setOpen(true);
    //const handleClose = () => setOpen(false);

    //const available = 

    const partToRender = chapterParts.find((part) => part.id === chapter);

    function renderBackButton() {
        return (
            <IconButton
                className="back-button"
                icon={<ArrowBackIcon />}
                onClick={() => { navigate('/textbook') }}
            >
            </IconButton>
        );
    }

    const UnavailableButton = observer((props: { answer: string, onClick?: () => void }) => {
        const [isUnavailable, setIsUnavailable] = React.useState(false);
        //const [ isNextSelected, setIsNextSelected ] = React.useState(false);


        const handleOnClick = () => {
            setIsUnavailable(true);
            if (props.onClick) props.onClick();
        }

        return (
            <Button
                disabled={disableButton()}
                className={`path-option ${isUnavailable ? "unavailable" : "part-of-path"} `}
                onClick={handleOnClick}>

            </Button>
        )
    });

    //const disableButton = () => {
        //if (!isUnavailable) {
        //    return true;
        //} else {
        //    return false;
        //}
    //}


    const handleQuiz1Click = () => {
        //sets 1st quiz to be current
        setIsCurrent1(true);
        setIsCurrent2(false);
        setIsCurrent3(false);
        setPlaceholdQ1(true);
    };

    const handleQuiz2Click = () => {
        //sets 2nd quiz to be current
        setIsCurrent1(false);
        setIsCurrent2(true);
        setIsCurrent3(false);
        setPlaceholdQ2(true);
    };

    const handleQuiz3Click = () => {
        //sets 3rd quiz to be current
        setIsCurrent1(false);
        setIsCurrent2(false);
        setIsCurrent3(true);
        setPlaceholdQ3(true);
    };

    const handlePath1Click = () => {
        
        setIsPath1(true);
        setIsPath2(false);
        setIsPath3(false);
        setPlaceholdPath1(true);
    };

    const handlePath2Click = () => {
        setIsPath1(false);
        setIsPath2(true);
        setIsPath3(false);
        setPlaceholdPath1(true);
    };

    const handlePath3Click = () => {
        setIsPath1(false);
        setIsPath2(false);
        setIsPath3(true);
        setPlaceholdPath1(true);
    };

    
    const handlePath4Click = () => {
        setIsPath4(true);
        setIsPath5(false);
        setIsPath6(false);
        setPlaceholdPath2(true);
    };

    const handlePath5Click = () => {
        setIsCurrent1(false);
        setIsPath4(false);
        setIsPath5(true);
        setIsPath6(false);
        setPlaceholdPath2(true);
    };

    const handlePath6Click = () => {
        setIsCurrent2(false);
        setIsPath4(false);
        setIsPath5(false);
        setIsPath6(true);
        setPlaceholdPath2(true);
    };


    


    return (
        <PageContent bodyFill className="textbook-page" header={renderBackButton()}>
            <Panel>

                <Panel
                    className="question-card"
                >
                    <Grid style={{ width: "100%"}} align = "center">
                    <Row >
                    <Col xs={24} md={8}>
                            </Col>
                            <Col xs={24} md={8}>
                                <Button
                                    size="lg"
                                    className={`path-option ${placeholdPath1 ? "part-of-path" : isCurrent1 ? "current": "unavailable"} `}
                                    onClick={handleQuiz1Click}>
                                    </Button>
                            </Col>
                            <Col xs={24} md={8}>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} md={8}>
                                
                                <Button
                                    className={`path-option ${placeholdQ2 && isPath1 ? "part-of-path" : isPath1 ? "current" : "unavailable"} `}
                                    onClick={handlePath1Click}></Button>
                            </Col>
                            <Col xs={24} md={8}>

                                <Button
                                className={`path-option ${placeholdQ2 && isPath2 ? "part-of-path" : isPath2 ? "current" : "unavailable"} `}
                                    onClick={handlePath2Click}>

                                </Button>
                            </Col><Col xs={24} md={8}>
                            <Button
                            className={`path-option ${placeholdQ2 && isPath3 ? "part-of-path" : isPath3 ? "current" : "unavailable"} `}
                                    onClick={handlePath3Click}> </Button>
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={24} md={8}>
                            </Col>
                            <Col xs={24} md={8}>
                            <Button
                                    className={`path-option ${placeholdQ3 || placeholdPath2 ? "part-of-path" : isCurrent2  && placeholdPath1 ? "current" : "unavailable"} `}
                                    onClick={handleQuiz2Click}></Button>
                            </Col>
                            <Col xs={24} md={8}>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} md={8}>

                                <Button
                                className={`path-option ${placeholdQ3 && isPath4 ? "part-of-path" : isPath4 ? "current" : "unavailable"} `}
                                    onClick={handlePath4Click}>

                                    </Button>
                            </Col>
                            <Col xs={24} md={8}>

                                <Button
                                className={`path-option ${placeholdQ3 && isPath5 ? "part-of-path" : isPath5 ? "current" : "unavailable"} `}
                                onClick={handlePath5Click}>

                                </Button>
                            </Col><Col xs={24} md={8}>

                            <Button
                            className={`path-option ${placeholdQ3 && isPath6 ? "part-of-path" : isPath6 ? "current" : "unavailable"} `}
                                    onClick={handlePath6Click}> </Button>
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={24} md={8}>
                            </Col>
                            <Col xs={24} md={8}>
                            <Button
                                    className={`path-option ${isCurrent3 ? "current" : "unavailable"} `}
                                    onClick={handleQuiz3Click}></Button>
                            </Col>
                            <Col xs={24} md={8}>
                                
                            </Col>
                        </Row>
                    </Grid>
                </Panel>
            </Panel>

        </PageContent>
    );
});

function and(arg0: boolean) {
    throw new Error("Function not implemented.");
}
