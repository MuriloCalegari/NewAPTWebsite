import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Avatar, Container, Content, IconButton, List, Modal, Panel, Stack} from "rsuite";
import CloseIcon from '@rsuite/icons/Close';
import {useStores} from "@/hooks/useStores";
import {Thread} from "@/data/model/Thread";
import {MDXProvider} from "@mdx-js/react";
import {Highlight} from "@/pages/textbook/chapters/components/Highlight";
import {evaluate} from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import {ThreadScreen} from "@/components/Textbook/ThreadScreen";

export const TextbookThreads = observer(() => {
    const { textbookStore } = useStores();

    function renderHeader() {
        return (
            <Stack justifyContent={"space-between"}>
                <b>Threads</b>
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
        <div className={"right-sidebar"}>
            <Panel header={renderHeader()} shaded className={"textbook-thread-container"}>
                <Container>
                    <Content className={"threads-container"}>
                        <List hover>
                        {
                            textbookStore.threads.map((thread) => {
                                return (
                                    <List.Item
                                        style={{cursor: "pointer"}}
                                        onClick={() => { textbookStore.setActiveThread(thread) }}
                                    >
                                        <ThreadContainer thread={thread}/>
                                    </List.Item>
                                )
                            })
                        }
                        </List>
                    </Content>
                </Container>
            </Panel>
            <Modal
                backdrop
                open={textbookStore.activeThread !== null}
                onClose={() => { textbookStore.setActiveThread(null) }}
                className={"textbook-thread-modal"}
            >
                { textbookStore.activeThread && ([
                    <Modal.Header>
                        <Modal.Title>Thread</Modal.Title>
                    </Modal.Header>,
                    <Modal.Body style={{marginTop: 0}}>
                        <ThreadScreen thread={textbookStore.activeThread}/>
                    </Modal.Body>
                ])}
            </Modal>
        </div>
    );
});

export interface ThreadContainerProps {
    thread: Thread;
}

// Message component with an avatar, a person's name and the message content
const ThreadContainer = observer((props : ThreadContainerProps) => {
    const { thread } = props;

    // @ts-ignore
    const [ threadContent, setThreadContent ] = useState({ default: runtime.Fragment });

    const renderHeader = () => {
        return (
            <Stack direction={"column"} alignItems={"flex-start"} spacing={8}>
                <b>{thread.title}</b>
                <Stack spacing={8} alignItems={"center"}>
                    <Avatar
                        style={{display: "flex"}}
                        size="xs"
                        circle
                        src={thread.user.avatar}/>
                    <span className={"thread-user-name"}>{thread.user.name}</span>
                </Stack>
            </Stack>
        )
    }

    useEffect(
        () => {
            async function compileThreadContent() {
                // @ts-ignore
                const compiledThread = await evaluate(thread.relatedTextbookContent, { ...runtime });
                setThreadContent(compiledThread);
            }

            console.log("Compiling thread content");
            compileThreadContent();

        }, [thread.relatedTextbookContent]
    );

    const MdxContent = threadContent.default;

    return (
        <>
            <Panel header={renderHeader()} className={"textbook-side-thread"}>
                <div className={"side-thread-wrapper-container"}>
                {threadContent && (
                    <MDXProvider
                        components={{Highlight: (props) => <Highlight>{props.children}</Highlight>}}>
                        <MdxContent components={{Highlight: (props) => <Highlight>{props.children}</Highlight>}}/>
                    </MDXProvider>
                )}
                </div>
            </Panel>
        </>
    );
});