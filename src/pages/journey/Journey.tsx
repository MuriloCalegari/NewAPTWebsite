import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Col, Grid, IconButton, Modal, Panel, Row, Avatar, AvatarGroup, Stack, ModalProps } from "rsuite";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Part, chapterParts, chapters } from "@/pages/textbook/chapters/chapters";
import PageContent from "@/components/PageContent";
import ArrowBackIcon from '@rsuite/icons/ArowBack';
import { useState } from "react";
import { Icon } from "@rsuite/icons";

import { GiOpenTreasureChest } from "react-icons/gi";
import { mockDifferentUsers } from "@/data/mock";
import { faker } from "@faker-js/faker/locale/en";
import { User } from "@/data/model/User";

const MAX_AVATARS = 4;

export const Journey = observer(() => {

    const location = useLocation();
    const { chapter } = useParams();
    const navigate = useNavigate();

    console.log(location);
    console.log(chapter)


    const [currentLoadedPart, setCurrentLoadedPart] = React.useState<{ part: Part, chapterIndex: number, partIndex: number } | undefined>(undefined);

    const [isPartModalOpen, setIsPartModalOpen] = React.useState(false);


    const [currentRewardPart, setCurrentRewardPart] = React.useState<{ chapter: number, rewards: string } | undefined>(undefined);
    

    //new consts /////////////////////////////////////

    const [openReward, setOpenReward] = React.useState(false);
    const [openMessage, setOpenMessage] = React.useState(false);

    const handleCloseReward = () => setOpenReward(false);
    const handleOpenMessage = () => setOpenMessage(true);
    const handleCloseMessage = () => setOpenMessage(false);

    const [isRewardOpen, setIsRewardOpen] = useState(false);


    //state function

    const [count, setCount] = useState(0);
    //const handleZero = () => setCount(0);
    const [FriendsOpen, setFriendsOpen] = React.useState(false);
    const handleFriendsOpen = () => setFriendsOpen(true);
    const handleFriendsClose = () => setFriendsOpen(false);


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


    /// friends list /////////////////////////////////////////////////

    const OnlineFriends = [
        { avatar: 'A', color: '#000', name: 'AP' },
        { avatar: 'B', color: '#4f6733', name: 'BL' },
        { avatar: 'C', color: '#245643', name: 'RG' },
        { avatar: 'D', color: '#bbb568', name: 'LK' },
        { avatar: 'E', color: '#4f6733', name: 'BY' },

    ];

    const OfflineFriends = [

        { avatar: 'G', color: '#78dd', name: 'LL' },
        { avatar: 'A', color: '#444aaa', name: 'SS' },

    ];

    return (
        <PageContent bodyFill className="textbook-page" header={renderBackButton()}>
            <Panel>
                <Panel
                    className="question-card"
                >

                    <Grid style={{ width: "100%" }} align="center">
                        <Row>
                            <Col xs={24} md={8}>
                            </Col>
                            <Col xs={24} md={8}>
                            </Col>
                                <Button
                                    size="lg"
                                    className={`friends`}
                                    onClick={handleFriendsOpen}>
                                    Friends

                                </Button>
                            <h4>Journey</h4>
                            <Col xs={24} md={8}>
                            </Col>
                            <Col xs={24} md={8}>
                            </Col>
                            <Col xs={24} md={8}>
 
                                <Modal autoFocus={true}
                                    open={FriendsOpen}
                                    onClose={handleFriendsClose}
                                    size="lg"
                                    alignItems="center"

                                    //backdropClassName="quiz-modal-backdrop"
                                    className={`thread-page-cards`}>
                                    <Modal.Header
                                        style={{
                                            //display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}>
                                        <Row>
                                            <Col xs={24} md={8}></Col>
                                            <Col xs={24} md={8}></Col>
                                            <Col>
                                                <Button className={`friend-buttons`}>
                                                    Add  </Button>
                                                <Button className={`friend-buttons`}>
                                                    Remove  </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={24} md={8}></Col>
                                            <Col>
                                                <Modal.Title><h2>Friends</h2></Modal.Title>
                                            </Col>
                                            <Col xs={24} md={8}></Col>
                                        </Row>

                                    </Modal.Header>


                                    <Modal.Body>
                                        <Row gutter={150}>
                                            <Col xs={24} md={12}>
                                                <h4> Online Friends </h4>
                                                <h5><i>25 friend(s) online </i></h5>
                                                {mockDifferentUsers(faker.datatype.number({ min: 25, max: 25 }))
                                                    .map((friend) => (
                                                        <Row>

                                                            <Modal.Body>
                                                                <Col>
                                                                    <Avatar circle key={friend.name} src={friend.avatar}>
                                                                    </Avatar>
                                                                </Col>
                                                                <Col>
                                                                    <h5>{friend.name}</h5>
                                                                </Col>
                                                            </Modal.Body>
                                                        </Row>

                                                    ))}


                                            </Col>

                                            <Col xs={24} md={12}>



                                                <h4> Offline Friends </h4>


                                                <h5><i>12 friend(s) active</i></h5>

                                                {mockDifferentUsers(faker.datatype.number({ min: 12, max: 12 }))
                                                    .map((friend) => (
                                                        <Row>
                                                            <Modal.Body>
                                                                <Col>
                                                                    <Avatar circle key={friend.name} src={friend.avatar}>
                                                                    </Avatar>
                                                                </Col>
                                                                <Col>
                                                                    <h5>{friend.name}</h5>
                                                                </Col>
                                                            </Modal.Body>
                                                        </Row>

                                                    ))}
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>

                        {chapters.map((chapter, index) => {
                                const isChapterRewardOpen = (currentRewardPart?.chapter === index) && isRewardOpen;

                            return (
                                <>
                                    <Row gutter={16}>
                                        <Col xs={24} md={8}>
                                        </Col>
                                        <Col xs={24} md={8}>


                                            <IconButton
                                                size="lg"
                                                icon={<Icon size={"md"} as={GiOpenTreasureChest} />}
                                                className={"reward-chest-unopened"}
                                                onClick={() => {
                                                    setCurrentRewardPart({ chapter: index, rewards: chapter.rewards! });
                                                    setOpenReward(true);
                                                    setIsRewardOpen(true);

                                                    
                                                }}
                                                disabled={isChapterRewardOpen}
                                                >

                                            </IconButton>
                                            <Row>
                                                <h4>{`Chapter ${index + 1}`}</h4>
                                            </Row>


                                        </Col>
                                        <Col xs={24} md={8}>
                                        </Col>
                                    </Row>
                                    <Row>
                                        {chapter.parts.map((part, partIndex) => {
                                            return (
                                                
                                                <Col xs={24} md={24 / chapter.parts.length}>
                                                    <Stack direction="column" alignItems="center">

                                                        <AvatarGroup stack size="sm">
                                                            {part?.activeUsers
                                                                .filter((user, i) => i < MAX_AVATARS)
                                                                .map((user) => (
                                                                    <Avatar circle key={user.name} src={user.avatar}>
                                                                    </Avatar>


                                                                ))}
                                                            {part && part.activeUsers.length > MAX_AVATARS ? <Avatar circle style={{ background: '#111' }}>
                                                                + {part?.activeUsers.length - MAX_AVATARS}
                                                            </Avatar> : null}
                                                        </AvatarGroup>
                                                        <Button
                                                            className={`lesson-option ${count == 1 ? "selected" : "notselected"}  `}
                                                            onClick={() => {
                                                                setCurrentLoadedPart({ part: part, chapterIndex: index, partIndex: partIndex });
                                                                setIsPartModalOpen(true);
                                                            }}
                                                            

                                                        >
                                                            {`Lesson ${index + 1}.${partIndex + 1}`}
                                                        </Button>
                                                    </Stack>
                                                </Col>
                                            )
                                        })}

                                    </Row>
                                </>
                            )
                        })}
                    </Grid>
                </Panel>
            </Panel>
            <PartModal
                open={isPartModalOpen}
                part={currentLoadedPart?.part}
                onClose={() => setIsPartModalOpen(false)}
                chapterIndex={currentLoadedPart?.chapterIndex ?? 0}
                partIndex={currentLoadedPart?.partIndex ?? 0}
            />
            <RewardModal
                open={openReward}
                rewards={currentRewardPart?.rewards ?? 0}
                chapterIndex={currentRewardPart?.chapter}
                onClose={() => { handleCloseReward(); handleOpenMessage() }}
            />
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
                    <Button size="lg" onClick={() => { handleCloseMessage() }}>Close </Button>
                </Modal.Footer>
            </Modal>


        </PageContent>

    );
});

function and(arg0: boolean) {
    throw new Error("Function not implemented.");
}

interface PartModalProps extends ModalProps {
    part?: Part;
    chapterIndex: number;
    partIndex: number;

}

const PartModal = observer((props: PartModalProps) => {

    const {
        part,
        chapterIndex,
        partIndex,
        ...rest
    } = props;

    return (
        <Modal autoFocus={true} size="lg" {...rest}
            backdropClassName="quiz-modal-backdrop"
            //className={`thread-page-cards`}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                //marginTop: 200,
            }}
            static
        >
            <Modal.Header>
                <Modal.Title><h2>{part?.title}</h2></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4> {`Lesson ${chapterIndex + 1}.${partIndex + 1}`} </h4>

            </Modal.Body>
            <Modal.Body>
                <h6>{part?.description}</h6>
            </Modal.Body>
            <Modal.Body>
                <h5>Friends</h5>
                
                <h6>{part?.activeUsers?.length} friend(s) active on this lesson right now </h6>

                <br></br>
                <br></br>
                <AvatarGroup stack size="md">
                    {part?.activeUsers
                        .filter((user, i) => i < MAX_AVATARS)
                        .map((user) => (
                            <Avatar circle key={user.name} src={user.avatar}>
                            </Avatar>

                        ))}
                    {part && part.activeUsers.length > MAX_AVATARS ? <Avatar circle style={{ background: '#111' }}>
                        + {part?.activeUsers.length - MAX_AVATARS}
                    </Avatar> : null}
                </AvatarGroup>


            </Modal.Body>
        </Modal>
    );
});

function extractInitials(name: string) {

    if (name.split(" ").length === 1) return name.charAt(0);

    return (`${name.split(" ")[0].charAt(0)} ${name.split(" ")[1].charAt(0)}`)
}

interface RewardProps extends ModalProps {
    rewards?: string;
    chapterIndex?: number;
}

const RewardModal = observer((props: RewardProps) => {


    const [selectedReward, setSelectedReward] = useState(null);
    const handleSelected = (reward) => {
        setSelectedReward(reward);
    };


    const {
        rewards,
        chapterIndex,
        ...rest
    } = props;

    return (
        <Modal autoFocus={true} size="lg" {...rest}
            backdropClassName="quiz-modal-backdrop"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            static
        >
            <Modal.Header>
                <Modal.Title><h2> Rewards</h2></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Choose a new theme:
                </h4>
            </Modal.Body>
            <Modal.Body>

                {typeof rewards === "string" && rewards.split(",").map((reward, i) => (

                    <Button
                        key={i}
                        size="md"
                        className={`path-option ${reward === selectedReward ? "current" : "part-of-path"}`}
                        active={reward === selectedReward}
                        onClick={() => { handleSelected(reward) }}
                    >
                        {reward}
                    </Button>
                ))}

            </Modal.Body>
        </Modal>
    );
});