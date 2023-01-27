import React from "react";
import {observer} from "mobx-react-lite";
import {Modal, ModalProps, Uploader} from "rsuite";
import {useStores} from "@/hooks/useStores";

export interface SubmitFileModalProps extends ModalProps {

}

// Make modal centralized in the screen
export const SubmitFileModal = observer((props: SubmitFileModalProps) => {

    const {courseAptsStore} = useStores();

    return (
        <Modal className={"submit-file-modal"} {...props} backdrop onClose={() => courseAptsStore.closeSubmitFileModal()}>
            <Modal.Header>
                <Modal.Title>Submit File</Modal.Title>

                <Uploader
                    draggable
                    action="https://jsonplaceholder.typicode.com/posts/"
                    onSuccess={(data, file) => {
                        courseAptsStore.openDrawer();
                        courseAptsStore.closeSubmitFileModal();
                        console.log(data, file);
                    }}
                    disabledFileItem
                >
                    <div style={{ marginLeft: 24, marginTop: 24, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span>Click or Drag files to this area to upload</span>
                    </div>
                </Uploader>

            </Modal.Header>
        </Modal>
    );
});