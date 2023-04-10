import React from "react";
import {observer} from "mobx-react-lite";
import {Avatar, IconButton, Panel, Stack} from "rsuite";
import CloseIcon from '@rsuite/icons/Close';
import {useStores} from "@/hooks/useStores";
import {Message} from "@/data/model/Message";

export const TextbookChat = observer(() => {

    const { textbookStore } = useStores();

    function renderHeader() {
        return (
            <Stack justifyContent={"space-between"}>
                <b>Chat</b>
                <IconButton
                    icon={<CloseIcon/>}
                    appearance="subtle"
                    onClick={() => {textbookStore.setSidebarState('closed')}}
                >

                </IconButton>
            </Stack>
        )
    }

    return (
        <Panel header={renderHeader()} shaded className={"chat-container"}>
            <Stack direction={"column"} alignItems={"flex-start"}>
            <div className={"messages-container"}>
                {
                    textbookStore.messages.map((message) => {
                        return <TextbookMessage message={message}/>
                    })
                }
            </div>
            <div className={"message-input"}>teste</div>
            </Stack>
        </Panel>
    );
});

export interface MessageProps {
    message: Message;
}

// Message component with an avatar, a person's name and the message content
const TextbookMessage = observer((props : MessageProps) => {
    const { message } = props;

    const renderHeader = () => {
        return (
            <Stack spacing={8} alignItems={"center"}>
                <Avatar
                    style={{display: "flex"}}
                    size="sm"
                    circle
                    src={message.user.avatar}/>
                <b>{message.user.name}</b>
            </Stack>
        )
    }

    return (
        <Panel header={renderHeader()} className={"textbook-message"}>
            <p>{message.content}</p>
        </Panel>
    );

    // return (
    //     <div className={`message`}>
    //         <div className="message-content">
    //             <div className="message-header">
    //                 <div className="message-author">
    //                     {message.user.name}
    //                 </div>
    //             </div>
    //             <div className="message-body">
    //                 {message.content}
    //             </div>
    //         </div>
    //     </div>
    // );
});