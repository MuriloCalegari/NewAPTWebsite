import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import {Button, Modal, ModalProps, Stack, Toggle, Uploader} from "rsuite";
import {useStores} from "@/hooks/useStores";
// @ts-ignore
import loadingCheckErrorRiv from '../../../media/animations/loading_check_error.riv';
// @ts-ignore
import successSound from "../../../media/animations/success_sound.mp3";
import {ProcessingCheckError} from "@/pages/courseapts/filesubmission/ProcessingCheckError";
export interface SubmitFileModalProps extends ModalProps {

}

// Make modal centralized in the screen
export const SubmitFileModal = observer((props: SubmitFileModalProps) => {

    console.log("SubmitFileModal re-rendered");

    const {courseAptsStore} = useStores();

    const [modalSubmissionState, setModalSubmissionState] = useState<"IDLE" | "PROCESSING" | "SUCCESS" | "FAILURE">("IDLE");
    const [willFail, setWillFail] = useState(false);

    const  handleModalClose = () => {
        courseAptsStore.closeSubmitFileModal();
        setModalSubmissionState("IDLE");
    };

    const handleOnUploadError = () => {
        console.log("Upload error");
        setModalSubmissionState("PROCESSING");
        setTimeout(() => {
            willFail ?
                setModalSubmissionState("FAILURE") :
                setModalSubmissionState("SUCCESS");
        }, 2000);
    }

    return (
        <Modal
            className={`submit-file-modal ${modalSubmissionState !== "IDLE" ? "full-screen" : ""} ${modalSubmissionState.toLowerCase()}`}
            backdropClassName={"submit-file-modal-backdrop"}
            {...props}
            backdrop
            onClose={handleModalClose}
        >
            <Modal.Header>
                <Stack spacing={10} className={"submit-file-modal-header"}>
                    <Modal.Title>Submit File</Modal.Title>
                    <Toggle onChange={(checked) => {setWillFail(checked)}}></Toggle>
                    Will fail?
                    <Button onClick={() => handleOnUploadError()}>Trigger file submission</Button>
                </Stack>
            </Modal.Header>
            <Modal.Body className={`submit-file-modal-body ${modalSubmissionState === "PROCESSING" ? "processing" : ""}`}>
                {modalSubmissionState === "IDLE" ?
                    <Uploader
                        draggable
                        action="https://jsonplaceholder.typicode.com/posts/"
                        onSuccess={(data, file) => {
                            courseAptsStore.openDrawer();
                            courseAptsStore.closeSubmitFileModal();
                            console.log(data, file);
                        }}
                        onError={handleOnUploadError}
                        disabledFileItem
                    >
                        <div>
                            <div className="upload-drop-area">
                                <span>Click or Drag files to this area to upload</span>
                            </div>
                        </div>
                    </Uploader> :
                    // <div className={"rive-div-container"}>
                        <ProcessingCheckError
                            status={modalSubmissionState}
                            onSeeSubmissionClick={() => {courseAptsStore.openDrawer(courseAptsStore.currentLoadedApt, true); handleModalClose();}}
                        />
                    // </div>
                }
            </Modal.Body>
        </Modal>
    );
});