import {observer} from "mobx-react-lite";
import {useStores} from "@/hooks/useStores";
import {Modal} from "rsuite";
import {ThreadScreen} from "@/components/Textbook/ThreadScreen";
import React from "react";

export const ThreadModal = observer(() => {

    const { textbookStore } = useStores();

    return <Modal
        backdrop
        open={textbookStore.activeThread !== null}
        onClose={() => {
            textbookStore.setActiveThread(null)
        }}
        className={"textbook-thread-modal"}
    >
        {textbookStore.activeThread && ([
            <Modal.Header>
                <Modal.Title>Thread</Modal.Title>
            </Modal.Header>,
            <Modal.Body style={{marginTop: 0}}>
                <ThreadScreen thread={textbookStore.activeThread}/>
            </Modal.Body>
        ])}
    </Modal>;
});