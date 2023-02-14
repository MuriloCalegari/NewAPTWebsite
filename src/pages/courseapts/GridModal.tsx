import React from "react";
import {observer} from "mobx-react-lite";
import {Modal, ModalProps, Uploader} from "rsuite";
import {useStores} from "@/hooks/useStores";

export interface QuizModalProps extends ModalProps {

}

// Make modal centralized in the screen
export const QuizModal = observer(() => {

    const {courseAptsStore} = useStores();

    return (
        <Modal className={"quiz-modal"} >
            <Modal.Header>
                <Modal.Title>Quiz</Modal.Title>



            </Modal.Header>
        </Modal>
    );
});