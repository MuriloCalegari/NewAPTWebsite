import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Col, FlexboxGrid, Grid, IconButton, Modal, Panel, Row, Avatar, AvatarGroup} from "rsuite";
import { MDXProvider } from "@mdx-js/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { chapterParts } from "@/pages/textbook/chapters/chapters";
import PageContent from "@/components/PageContent";
import ReactMarkdown from "react-markdown";
import ArrowBackIcon from '@rsuite/icons/ArowBack';
import { unary } from "lodash";
import LineTo from 'react-lineto';
//import { MultipleChoiceQuestion } from "./components/MultipleChoiceQuestion";
//import default function from "./dummyAvatars";
import { LessonModal } from "./lessonModal";
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { LessonsData } from "./LessonData";
import { useState } from "react";

export const Journey = observer(() => {

    const location = useLocation();
    const { chapter } = useParams();
    const navigate = useNavigate();

    console.log(location);
    console.log(chapter)

    //old consts
    const [isCurrent1, setIsCurrent1] = React.useState(true);
    const [isCurrent2, setIsCurrent2] = React.useState(false);
    const [isCurrent3, setIsCurrent3] = React.useState(false);


    const [placeholdQ1, setPlaceholdQ1] = React.useState(false);
    const [placeholdQ2, setPlaceholdQ2] = React.useState(false);
    const [placeholdQ3, setPlaceholdQ3] = React.useState(false);



    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    
    const handleClose = () => 
    {setOpen1(false); 
    setOpen2(false); 
    setOpen3(false);}

    const [isClicked1, setIsClicked1] = React.useState(false);
    const [isClicked2, setIsClicked2] = React.useState(false);
    const [isClicked3, setIsClicked3] = React.useState(false);

    //new consts /////////////////////////////////////

    //const [isRewardClicked, setIsRewardClicked] = React.useState(false);
    const [openReward, setOpenReward] = React.useState(false);
    //const [closeReward, setCloseReward] = React.useState(true);
    const [openMessage, setOpenMessage] = React.useState(false);

    //const [isLessonClicked, setIsLessonClicked] = React.useState(false);
    const [openLesson, setOpenLesson] = React.useState(false);

    const handleLessonOpen = () => setOpenLesson(true);
    const handleLessonClose = () => setOpenLesson(false);

    // new handle click functions ////////////////////////////

    //const handleRewardOpen = () => setIsRewardClicked(true);
    //const handleRewardClose = () => setIsRewardClicked(false);

   
    const handleOpenReward = () => setOpenReward(true);
    const handleCloseReward = () => setOpenReward(false);
    const handleOpenMessage = () => setOpenMessage(true);
    const handleCloseMessage = () => setOpenMessage(false);
  
    //state function

    const [count, setCount] = useState(0);
    const handleZero = () => setCount(0);


    //old 
    const i = 0;
    

    const partToRender = chapterParts.find((part) => part.id === chapter);

    function renderBackButton() {
        return (
            <IconButton
                className="back-button"
                icon={<ArrowBackIcon />}
                onClick={() => { navigate('/course_apts') }}
            >
            </IconButton>
        );
    }

    //function renderLesson(LessonsData: Lesson) {
    //    return (
    //        <Grid>
    //            <Row>
    //                <Col xs={12} md={8}>
    //                    <Button
    //                        className={`quiz-answer-option ${isCorrectAnswerSelected ? "correct" : ""}`}
    //                        onClick={handleLessonOpen}>{testCase.expectedOutput}</Button>
    //                </Col>
    //                {testCase.reasonableWrongOutputs.map((output) => {
    //                    return (
    //                        <Col xs={12} md={8}>
    //                            <WrongAnswerButton answer={output} onClick={handleIncorrectClick} />
    //                        </Col>
    //                    )
    //                })}
    //            </Row>
    //        </Grid>
    //    );
    //}

    const UnavailableButton = observer((props: { answer: string, onClick?: () => void }) => {
        const [isUnavailable, setIsUnavailable] = React.useState(false);
        //const [ isNextSelected, setIsNextSelected ] = React.useState(false);


        const handleOnClick = () => {
            setIsUnavailable(true);
            if (props.onClick) props.onClick();
        }

        return (
            <Button
                //disabled={disableButton()}
                className={`path-option ${isUnavailable ? "unavailable" : "part-of-path"} `}
                onClick={handleOnClick}>

            </Button>
        )
    });

    //disabled button

    //const disableButton = () => {
    //if (!isUnavailable) {
    //    return true;
    //} else {
    //    return false;
    //}
    //}

    //old handle click functions
    
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


    const handleAnswerClick1 = () => {
        setIsClicked1(true);
        setIsClicked2(false);
        setIsClicked3(false);
    };
    const handleAnswerClick2 = () => {
        setIsClicked1(false);
        setIsClicked2(true);
        setIsClicked3(false);
    };
    const handleAnswerClick3 = () => {
        setIsClicked1(false);
        setIsClicked2(false);
        setIsClicked3(true);
    };

     const handleClear = () => {
        setIsClicked1(false);
        setIsClicked2(false);
        setIsClicked3(false);
    };
    //
    // 
    // users and friends list //////////////////////////////////////////////////////////////////////

    const users1 = [
        { avatar : 'A', color: '#000', name: 'AP' },
        { avatar : 'B', color: '#4f6733', name: 'BL' },
        { avatar : 'C', color: '#245643', name: 'RG' },
        { avatar : 'D', color: '#bbb568', name: 'LK' },
        { avatar : 'E', color: '#4f6733', name: 'BY' },
        { avatar : 'F', color: '#245643', name: 'RF' },
        { avatar : 'G', color: '#78dd', name: 'LL' },
    ];

    const users2 = [
        { avatar : 'A', color: '#444aaa', name: 'SS' },
        { avatar : 'B', color: '#0f6733', name: 'DO' },
        { avatar : 'C', color: '#245643', name: 'WM' },
        { avatar : 'D', color: '#78dd', name: 'TN' },
    ];

    const users3 = [
        { avatar : 'A', color: '#D291BC', name: 'EF' },
        { avatar : 'B', color: '#957DAD', name: 'IH' },
        { avatar : 'C', color: '#E0BBE4', name: 'XC' },
  
    ];

    const users4 = [
        { avatar : 'A', color: '#ffb3ba', name: 'AA' },
        { avatar : 'C', color: '#FFD580', name: 'XC' },
    
    ];

    const users5 = [
        { avatar : 'A', color: '#000437', name: 'NS' },


    ];

    const users6 = [
        { avatar : 'A', color: '#0bb568', name: 'HH' },
    ];

    const users7 = [
        { avatar : 'yeah', color: '#a7bed3', name: 'JT' },
    ];

    const maxAvatars = 4;

    /// friends list /////////////////////////////////////////////////
    
    const OnlineFriends = [
        { avatar : 'A', color: '#000', name: 'AP' },
        { avatar : 'B', color: '#4f6733', name: 'BL' },
        { avatar : 'C', color: '#245643', name: 'RG' },
        { avatar : 'D', color: '#bbb568', name: 'LK' },
        { avatar : 'E', color: '#4f6733', name: 'BY' },
        { avatar : 'F', color: '#245643', name: 'RF' },
        { avatar : 'G', color: '#78dd', name: 'LL' },

        { avatar : 'A', color: '#444aaa', name: 'SS' },
        { avatar : 'B', color: '#0f6733', name: 'DO' },
        { avatar : 'C', color: '#245643', name: 'WM' },
        { avatar : 'D', color: '#78dd', name: 'TN' },

        { avatar : 'A', color: '#D291BC', name: 'EF' },
        { avatar : 'B', color: '#957DAD', name: 'IH' },
        { avatar : 'C', color: '#E0BBE4', name: 'XC' },
  

        { avatar : 'A', color: '#ffb3ba', name: 'AA' },
        { avatar : 'C', color: '#FFD580', name: 'XC' },
    

        { avatar : 'A', color: '#000437', name: 'NS' },


        { avatar : 'A', color: '#0bb568', name: 'HH' },
        { avatar : 'yeah', color: '#a7bed3', name: 'JT' },
    ];

    const OfflineFriends = [

        { avatar : 'G', color: '#78dd', name: 'LL' },

        { avatar : 'A', color: '#444aaa', name: 'SS' },
        { avatar : 'B', color: '#0f6733', name: 'DO' },
        { avatar : 'C', color: '#245643', name: 'WM' },
        { avatar : 'D', color: '#78dd', name: 'TN' },

        { avatar : 'A', color: '#D291BC', name: 'EF' },
        { avatar : 'B', color: '#957DAD', name: 'IH' },
        { avatar : 'C', color: '#E0BBE4', name: 'XC' },
  

        { avatar : 'A', color: '#ffb3ba', name: 'AA' },
        { avatar : 'C', color: '#FFD580', name: 'XC' },
    

        { avatar : 'A', color: '#000437', name: 'NS' },


        { avatar : 'A', color: '#0bb568', name: 'HH' },
        { avatar : 'yeah', color: '#a7bed3', name: 'JT' },
    ];

    //const [expanded, setExpand] = React.useState(false);
    //const [activeKey, setActiveKey] = React.useState('1');

    //<CustomSidenav
    //activeKey={3}
    //openKeys={openKeys}
    //onSelect={setActiveKey}
    //onOpenChange={setOpenKeys}
    //expanded={expanded}
    //onExpand={setExpand}
    ///>

    return (
        <PageContent bodyFill className="textbook-page" header={renderBackButton()}>
            <Panel>
                <Panel
                    className="question-card"
                >

                    <Grid style={{ width: "100%" }} align="center">
                        <Row>
                        <h4>Journey</h4>
                            <Col xs={24} md={8}>
                            </Col>
                            <Col xs={24} md={8}>
                                </Col>
                            <Col xs={24} md={8}>
                            <Button 
                                size = "lg"
                                className={`friends`}
                                onClick={() => { handleLessonOpen(); setCount(-1) }}>
                                Friends

                            </Button>
                            <Modal autoFocus={true} open={count == -1} size="lg" onClose = {handleZero} 
                                        backdropClassName="quiz-modal-backdrop"
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginLeft: 100,
                                            marginTop: 100,
                                    
                                        }}>
                                        <Modal.Header>
                                            <Modal.Title><h2>Friends</h2></Modal.Title>
                                            <Button> Add Friends </Button>
                                            <Button> Remove Friends </Button>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <h4> Online Friends </h4>
                                        
                                        </Modal.Body>

                                        <Modal.Body>
                                            <h5>Friends</h5>
                                            {OnlineFriends.length} friend(s) active
                                            
                                            {OnlineFriends
                                                .map((friend) => (
                                                    <Row>
                                                    <Modal.Body>
                                                    <Avatar circle key={friend.name} style={{background: friend.color}}>
                                                    {friend.name}
                                                    </Avatar>
                                                    {friend.name}
                                                    </Modal.Body>
                                                    </Row>

                                                ))}


                                            <h4> Offline Friends </h4>
                                            {OfflineFriends.length} friend(s) offline
                                            
                                            {OfflineFriends
                                                .map((friend) => (
                                                    <Row>
                                                    <Modal.Body>
                                                    <Avatar circle key={friend.name} style={{background: friend.color}}>
                                                    {friend.name}
                                                    </Avatar>
                                                    {friend.name}
                                                    </Modal.Body>
                                                    </Row>

                                                ))}
                                        
                                        </Modal.Body>
                                    </Modal> 
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} md={8}>
                            </Col>
                            <Col xs={24} md={8}>
                                <Button
                                    size="lg"
                                    className={`reward-chest ${openReward ? "opened" : "unopened"} `}
                                    onClick={() => { handleQuiz1Click(); handleOpen1(); handleOpenReward()}}
                                    >
                                    Reward
                                </Button>
                                
                                <Row>
                                <h4>Chapter 1</h4>
                                </Row>


                                <Modal autoFocus={true} open={open1} backdrop="static" size="lg" onClose={handleCloseReward}
                                    backdropClassName="quiz-modal-backdrop"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>
                                    <Modal.Header>
                                        <Modal.Title><h2>Rewards</h2></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h4>Choose a new theme:
                                        </h4>
                                    </Modal.Body>
                                    <Modal.Body>
                                        <Button size="md"
                                            className={`path-option ${isClicked1 ? "current" : "part-of-path"} `}
                                            onClick={handleAnswerClick1}> Blue </Button>
                                        <Button size="md"
                                            className={`path-option ${isClicked2 ? "current" : "part-of-path"} `}
                                            onClick={handleAnswerClick2}> Red </Button>
                                        <Button size="md"
                                            className={`path-option ${isClicked3 ? "current" : "part-of-path"} `}
                                            onClick={handleAnswerClick3}> Green </Button>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button size="lg" onClick={() => { handleClose(); handleClear(); handleOpenMessage() }}>Close </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Modal autoFocus={true} open={openMessage} size="lg" onClose={handleCloseReward}
                                    backdropClassName="quiz-modal-backdrop"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                    <Modal.Header>
                                        <h4> Good Choice! </h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Item added to your collection!
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button size="lg" onClick={() => { handleCloseMessage(); handleClear() }}>Close </Button>
                                    </Modal.Footer>
                                    </Modal>


                                
                            </Col>
                            <Col xs={24} md={8}>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} md={8}>
                                    <AvatarGroup stack size="md">
                                            {users1
                                                .filter((user, i) => i < maxAvatars)
                                                .map((user) => (
                                                    <Avatar circle key={user.name} style={{background: user.color}}>
                                                    {user.name}
                                                    </Avatar>
                                                ))}
                                                <Avatar circle style={{ background: '#111' }}>
                                                    + {users1.length - maxAvatars}
                                                </Avatar>
                                            </AvatarGroup>
                                    <Button
                                        className={`lesson-option ${count == 1 ? "selected" :  "notselected"}  `}
                                        onClick={() => { handleLessonOpen(); setCount(1) }}
                                    
                                        > 
                                        {LessonsData[0].number}
                                    </Button>
                                    
                                    <Modal autoFocus={true} open={count ==1} size="lg" onClose = {handleZero} 
                                        backdropClassName="quiz-modal-backdrop"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <Modal.Header>
                                            <Modal.Title><h2>{LessonsData[0].title}</h2></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4> {LessonsData[0].number} </h4>
                                        
                                        </Modal.Body>
                                        <Modal.Body>
                                        {LessonsData[0].description}
                                        </Modal.Body>
                                        Link Here?
                                        <Modal.Body>
                                            <h5>Friends</h5>
                                            {users1.length} friend(s) active on this lesson right now
                                            <AvatarGroup stack size="md">
                                            {users1
                                                .filter((user, i) => i < maxAvatars)
                                                .map((user) => (
                                                    <Avatar circle key={user.name} style={{background: user.color}}>
                                                    {user.name}
                                                    </Avatar>


                                                ))}
                                                <Avatar circle style={{ background: '#111' }}>
                                                    + {users1.length - maxAvatars}
                                                </Avatar>
                                            </AvatarGroup>
                                            
                                        </Modal.Body>
                                    </Modal> 
                                    
                                                    

                            </Col>
                            <Col xs={24} md={8}>
                                <AvatarGroup stack size="md">
                                        {users2.map((user) => (
                                      <Avatar circle key={user.name} style={{background: user.color}} >
                                      {user.name}
                                      </Avatar>
                                      ))}
                                </AvatarGroup>
                                <Button
                                    
                                    className={`lesson-option ${count == 2 ? "selected" :  "notselected"} `}
                                    onClick={() => { handleLessonOpen(); setCount(2) }} >
                                    {LessonsData[1].number}
                                </Button>
                                <Modal autoFocus={true} open={count == 2} size="lg" onClose = {handleZero} 
                                        backdropClassName="quiz-modal-backdrop"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <Modal.Header>
                                            <Modal.Title><h2>{LessonsData[1].title}</h2></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4> {LessonsData[1].number} </h4>
                                        
                                        </Modal.Body>
                                        <Modal.Body>
                                        {LessonsData[1].description}

                                        </Modal.Body>
                                        <Modal.Body>
                                            <h5>Friends</h5>
                                            {users2.length} friend(s) active on this lesson right now
                                            <AvatarGroup stack size="md">
                                            {users2
                                                .filter((user, i) => i < maxAvatars)
                                                .map((user) => (
                                                    <Avatar circle key={user.name} style={{background: user.color}}>
                                                    {user.name}
                                                    </Avatar>

                                                ))}

                                            </AvatarGroup>
                                            
                                        </Modal.Body>
                                    </Modal>     

                            </Col><Col xs={24} md={8}>
                                <AvatarGroup stack size="md">
                                        {users3.map((user) => (
                                        <Avatar circle key={user.name} style={{background: user.color}} >
                                        {user.name}
                                        </Avatar>
                                        ))}
                                </AvatarGroup>
                                <Button
                                    className={`lesson-option ${count == 3 ? "selected" :  "notselected"}  `}
                                    onClick={() => { handleLessonOpen(); setCount(3) }} >
                                    {LessonsData[2].number} </Button>
                                <Modal autoFocus={true} open={count == 3} size="lg" onClose = {handleZero} 
                                        backdropClassName="quiz-modal-backdrop"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <Modal.Header>
                                            <Modal.Title><h2>{LessonsData[2].title}</h2></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4> {LessonsData[2].number} </h4>
                                        
                                        </Modal.Body>
                                        <Modal.Body>
                                        {LessonsData[2].description}
                                        </Modal.Body>
                                        <Modal.Body>
                                            <h5>Friends</h5>
                                            {users3.length} friend(s) active on this lesson right now
                                            <AvatarGroup stack size="md">
                                            {users3
                                                .filter((user, i) => i < maxAvatars)
                                                .map((user) => (
                                                    <Avatar circle key={user.name} style={{background: user.color}}>
                                                    {user.name}
                                                    </Avatar>

                                                ))}

                                            </AvatarGroup>
                                            
                                        </Modal.Body>
                                    </Modal>     
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} md={8}>
                            </Col>
                            <Col xs={24} md={8}>
                                <Button
                                    className={`reward-chest ${openReward ? "opened" : "unopened"} `}
                                    onClick={() => { handleQuiz2Click(); handleOpen2(); handleOpenReward}}>
                                    Reward
                                </Button>
                                
                                <h4>Chapter 2</h4>

                                <Modal autoFocus={true} open={open2} backdrop="static" size="lg" onClose={handleCloseReward}
                                    backdropClassName="quiz-modal-backdrop"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>
                                    <Modal.Header>
                                        <Modal.Title><h2>Reward</h2></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h4> Choose a new icon:
                                        </h4>
                                    </Modal.Body>
                                    <Modal.Body>
                                        <Button size="md"
                                            className={`path-option ${isClicked1 ? "current" : "part-of-path"} `}
                                            onClick={handleAnswerClick1}> Harry Potter </Button>
                                        <Button size="md"
                                            className={`path-option ${isClicked2 ? "current" : "part-of-path"} `}
                                            onClick={handleAnswerClick2}> Spongebob </Button>
                                        <Button size="md"
                                            className={`path-option ${isClicked3 ? "current" : "part-of-path"} `}
                                            onClick={handleAnswerClick3}> Bojack Horseman </Button>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button size="lg" onClick={() => { handleClose(); handleClear(); handleOpenMessage() }}>Close </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                            <Col xs={24} md={8}>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} md={8}>
                            <AvatarGroup stack size="md">
                                        {users4.map((user) => (
                                      <Avatar circle key={user.name} style={{background: user.color}} >
                                      {user.name}
                                      </Avatar>
                                      ))}
                                </AvatarGroup>
                                <Button
                                    className={`lesson-option ${count == 4 ? "selected" :  "notselected"}  `}
                                    onClick={() => {setCount(4) }} >
                                    {LessonsData[3].number} </Button>
                                <Modal autoFocus={true} open={count == 4} size="lg" onClose={handleZero} 
                                        backdropClassName="quiz-modal-backdrop"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <Modal.Header>
                                            <Modal.Title><h2>{LessonsData[3].title}</h2></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4> {LessonsData[3].number} </h4>
                                            
                                        </Modal.Body>
                                        <Modal.Body>
                                        {LessonsData[3].description}
                                        </Modal.Body>
                                        <Modal.Body>
                                            <h5>Friends</h5>
                                            {users4.length} friend(s) active on this lesson right now
                                            <AvatarGroup stack size="md">
                                            {users4
                                                .filter((user, i) => i < maxAvatars)
                                                .map((user) => (
                                                    <Avatar circle key={user.name} style={{background: user.color}}>
                                                    {user.name}
                                                    </Avatar>

                                                ))}

                                            </AvatarGroup>
                                            
                                        </Modal.Body>
                                    </Modal>

                                
                            </Col>
                            <Col xs={24} md={8}>
                            <AvatarGroup stack size="md">
                                        {users5.map((user) => (
                                      <Avatar circle key={user.name} style={{background: user.color}} >
                                      {user.name}
                                      </Avatar>
                                      ))}
                                </AvatarGroup>
                                <Button
                                    className={`lesson-option ${count == 5 ? "selected" :  "notselected"}  `}
                                    onClick={() => { handleLessonOpen(); setCount(5) }} >
                                    {LessonsData[4].number} </Button>
                                <Modal autoFocus={true} open={count == 5} size="lg" onClose = {handleZero}  
                                        backdropClassName="quiz-modal-backdrop"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <Modal.Header>
                                            <Modal.Title><h2>{LessonsData[4].title}</h2></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4> {LessonsData[4].number} </h4>
                                        
                                        </Modal.Body>
                                        <Modal.Body>
                                        {LessonsData[4].description}
                                        </Modal.Body>
                                        <Modal.Body>
                                            <h5>Friends</h5>
                                            {users5.length} friend(s) active on this lesson right now    
                                            <AvatarGroup stack size="md">
                                            {users5
                                                .filter((user, i) => i < maxAvatars)
                                                .map((user) => (
                                                    <Avatar circle key={user.name} style={{background: user.color}}>
                                                    {user.name}
                                                    </Avatar>

                                                ))}
                                            </AvatarGroup>
                                            
                                        </Modal.Body>
                                    </Modal>
                                    
                                    
                            </Col><Col xs={24} md={8}>
                            <AvatarGroup stack size="md">
                                        {users6.map((user) => (
                                      <Avatar circle key={user.name} style={{background: user.color}} >
                                      {user.name}
                                      </Avatar>
                                      ))}
                                </AvatarGroup>
                                <h4>    </h4>

                                <Button
                                    className={`lesson-option ${count == 6 ? "selected" :  "notselected"}  `}
                                    onClick={() => {setCount(6) }} >
                                    {LessonsData[5].number} </Button>
                                <Modal autoFocus={true} open={count == 6} size="lg" onClose={handleZero} 
                                        backdropClassName="quiz-modal-backdrop"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <Modal.Header>
                                            <Modal.Title><h2>{LessonsData[5].title}</h2></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4> {LessonsData[5].number} </h4>
                                        
                                        </Modal.Body>
                                        <Modal.Body>
                                        {LessonsData[5].description}
                                        </Modal.Body>
                                        <Modal.Body>
                                            <h5>Friends</h5>
                                            {users6.length} friend(s) active on this lesson right now
                                            <AvatarGroup stack size="md">
                                            {users6
                                                .filter((user, i) => i < maxAvatars)
                                                .map((user) => (
                                                    <Avatar circle key={user.name} style={{background: user.color}}>
                                                    {user.name}
                                                    </Avatar>

                                                ))}

                                            </AvatarGroup>
                                            
                                        </Modal.Body>
                                    </Modal>
                                    
                                        
                            </Col>
                            <Col xs={24} md={8}></Col>

                        </Row>
                        <Row>
                            <Col xs={24} md={8}>
                            </Col>
                            <Col xs={24} md={8}>
                                <Button
                                    className={`reward-chest ${openReward ? "opened" : "unopened"} `}
                                    onClick={() => { handleQuiz3Click(); handleOpen3(); handleOpenReward}}
                                    >
                                    Reward
                                </Button>
                                <h4>Chapter 3</h4>
                                <Modal autoFocus={true} open={open3} backdrop="static" size="lg" onClose={handleCloseReward}
                                    backdropClassName="quiz-modal-backdrop"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>
                                    <Modal.Header>
                                        <Modal.Title><h2>Reward</h2></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h4>Choose a new theme:
                                        </h4>
                                    </Modal.Body>
                                    <Modal.Body>
                                        <Button size="md"
                                            className={`path-option ${isClicked1 ? "current" : "part-of-path"} `}
                                            onClick={handleAnswerClick1}> The Ocean </Button>
                                        <Button size="md"
                                            className={`path-option ${isClicked2 ? "current" : "part-of-path"} `}
                                            onClick={handleAnswerClick2}> The City </Button>
                                        <Button size="md"
                                            className={`path-option ${isClicked3 ? "current" : "part-of-path"} `}
                                            onClick={handleAnswerClick3}> The Country </Button>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button size="lg" onClick={() => { handleClose(); handleClear(); handleOpenMessage() }}>Close </Button>
                                    </Modal.Footer>
                                </Modal>

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
