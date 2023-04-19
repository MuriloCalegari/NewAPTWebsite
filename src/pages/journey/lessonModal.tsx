// create an avatar component using dummy data
// this is used to display the avatar of the user

import React from 'react';
import { Avatar, Modal } from 'rsuite';
import { observer } from 'mobx-react-lite';

//set parent as modal component



export const LessonModal = observer(() => {

    const [isLessonClicked, setIsLessonClicked] = React.useState(false);
    const [openLesson, setOpenLesson] = React.useState(false);

    const handleLessonOpen = () => setOpenLesson(true);
    const handleLessonClose = () => setOpenLesson(false);

    //const handleLessonClick = () => {
        //setIsLessonClicked(true);
        //setOpenLesson(true)
    //};
    //const handleLessonClose = () => {
        //setIsLessonClicked(false);
        //setOpenLesson(false)
    //};

    return (
            <Modal autoFocus={true} open={openLesson} size="lg" onClose = {handleLessonClose} 
                backdropClassName="quiz-modal-backdrop"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Modal.Header>
                    <Modal.Title><h2>Lesson</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>This is the lesson title
                    </h4>
                </Modal.Body>
                <Modal.Footer>
                    Friends
                
                    <Avatar circle style={{ background: '#000' }}>
                    A
                    </Avatar>    

                    <Avatar circle style={{ background: '#0f6733' }}>
                    B
                    </Avatar>  
                    <Avatar circle style={{ background: '#245643' }}>
                    C
                    </Avatar> 
                    
                </Modal.Footer>
            </Modal>
    );
});