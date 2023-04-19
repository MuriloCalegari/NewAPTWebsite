import {observer} from "mobx-react-lite";
import React, {useState} from "react";
import {Thread} from "@/data/model/Thread";
import {MdxOnDemand} from "@/components/Textbook/MdxOnDemand";
import {Avatar, Container, Content, Divider, Footer, Input, InputGroup, Panel, Stack} from "rsuite";
import {Message} from "@/data/model/Message";
import SendIcon from "@rsuite/icons/Send";
import {useStores} from "@/hooks/useStores";

export interface ThreadScreenProps {
    thread: Thread;
}

export const ThreadScreen = observer((props : ThreadScreenProps) => {

    const { thread } = props;

    return (
        <div className={"thread-screen-container"}>
            <Stack direction={"column"} alignItems={"flex-start"} spacing={8}>
                <h1>
                    {thread.title}
                </h1>
                <Stack spacing={8} alignItems={"flex-start"}>
                    <Avatar
                        style={{display: "flex"}}
                        size="xs"
                        circle
                        src={thread.user.avatar}/>
                    <span className={"thread-user-name"}>{thread.user.name}</span>
                </Stack>
            </Stack>
            <div className={"side-thread-wrapper-container"}>
                <MdxOnDemand content={thread.relatedTextbookContent}/>
            </div>
            <MdxOnDemand content={thread.contentBody}/>
            <Divider style={{width: "100%"}}/>
            <h2>Responses</h2>
            <ChatContainer messages={thread.messages}/>
        </div>
    );
})

interface ChatContainerProps {
    messages?: Message[];
}

const ChatContainer = observer((props : ChatContainerProps) => {

    const [ currentMessage, setCurrentText ] = useState("");
    const { textbookStore } = useStores();

    const { messages } = props;

    function handleSendMessage() {
        textbookStore.sendMessageOnCurrentThread(currentMessage);
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
        <Container>
            <Content className={"messages-container"}>
                {
                    messages?.map((message) => {
                        return <ThreadMessage message={message}/>
                    })
                }
            </Content>
            <Footer className={"footer-container"}>
                {renderFooter()}
            </Footer>
        </Container>
    );
})

export interface ThreadMessageProps {
    message: Message;
}

const ThreadMessage = observer((props : ThreadMessageProps) => {
    const { message } = props;

    const renderHeader = () => {
        return (
            <Stack spacing={8} alignItems={"center"}>
                <Avatar
                    style={{display: "flex"}}
                    size="xs"
                    circle
                    src={message.user.avatar}/>
                <span className={"thread-message-username"}>{message.user.name}</span>
            </Stack>
        )
    }

    return (
        <Panel header={renderHeader()} className={"textbook-message"}>
            <p>{message.content}</p>
        </Panel>
    );
});