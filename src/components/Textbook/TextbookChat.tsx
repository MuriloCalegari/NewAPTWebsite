import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import {Avatar, Container, Content, Footer, IconButton, Input, InputGroup, Panel, Stack} from "rsuite";
import CloseIcon from '@rsuite/icons/Close';
import {useStores} from "@/hooks/useStores";
import {Message} from "@/data/model/Message";
import SendIcon from '@rsuite/icons/Send';
export const TextbookChat = observer(() => {

    const [ currentMessage, setCurrentText ] = useState("");
    const { textbookStore, userStore } = useStores();

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

    function handleSendMessage() {
        textbookStore.sendMessage(
            {
                user: userStore.currentUser,
                content: currentMessage
            }
        )
    }

    function renderFooter() {
        return (
            <InputGroup>
                <Input onChange={(text) => setCurrentText(text)}/>
                <InputGroup.Button onClick={handleSendMessage}>
                    <SendIcon/>
                </InputGroup.Button>
            </InputGroup>
        )
    }

    return (

        <Panel header={renderHeader()} shaded className={"chat-container"}>
            <Container>
                <Content className={"messages-container"}>
                        {
                            textbookStore.messages.map((message) => {
                                return <TextbookMessage message={message}/>
                            })
                        }
                </Content>
                <Footer className={"footer-container"}>
                    {renderFooter()}
                </Footer>
            </Container>
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