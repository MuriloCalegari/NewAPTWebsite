import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { callAPI } from "@/utils/queryFixie";
import { Container, Content, IconButton, Panel, Stack } from "rsuite";
import CloseIcon from "@rsuite/icons/Close";
import { useStores } from "@/hooks/useStores";
import { Icon } from '@rsuite/icons';
import { ImSpinner2 } from "react-icons/im"

interface TextbookAIProps {
    text: string;
}

export const TextbookAI = observer(({ text }: TextbookAIProps) => {
    const [lastMessage, setLastMessage] = useState<string | null>(null);
    const [aiLoading, setAiLoading] = useState(false)

    const { textbookStore } = useStores();

    const handleSummarize = async () => {
        const query = `Please summarize the following text. If it is a python code example, please describe what the given example means.: ${text}`
        setAiLoading(true)
        const message = await callAPI(query);
        setAiLoading(false)
        setLastMessage(message);
    };

    const handleExpand = async () => {
        const query = `Please expand upon the following text: ${text}`
        setAiLoading(true)
        const message = await callAPI(query);
        setAiLoading(false)
        setLastMessage(message);
    };

    const handleExample = async () => {
        const query = `Please give a comprehensive, multi-faceted, code example of the following python concept: ${text}. For any code you provide, please wrap that code in three backtick (\`) symbols.`
        setAiLoading(true)
        const message = await callAPI(query);
        setAiLoading(false)
        setLastMessage(message);
    };

    function renderHeader() {
        return (
            <Stack justifyContent={"space-between"}>
                <b>Ask AI</b>
                <IconButton
                    icon={<CloseIcon />}
                    appearance="subtle"
                    onClick={() => { textbookStore.setSidebarState('closed') }}
                >

                </IconButton>
            </Stack>
        )
    }

    return (
        <div className={"right-sidebar"}>
            <Panel header={renderHeader()} shaded className={"chat-container"}>
                <Container>
                    <Content>
                        <b >Selection: </b><p style={{ fontSize: "10px", marginBottom: "20px" }}>&quot;{text}&quot;</p>
                        {aiLoading ?
                            <div className="ai-loader"><Icon className="rotating" as={ImSpinner2}></Icon></div>
                            :
                            <div>

                                <div className="button-content">
                                    <button className="aiButton" onClick={handleSummarize}>Summarize</button>
                                    <button className="aiButton" onClick={handleExpand}>Expand</button>
                                    <button className="aiButton" onClick={handleExample}>Give an Example</button>


                                    {lastMessage &&
                                        <div style={{ marginTop: "20px" }}>
                                            <b>Response: </b>
                                            <p style={{ fontSize: "10px" }}>{lastMessage}</p>
                                        </div>
                                    }

                                </div>

                            </div>
                        }
                    </Content>
                </Container>
            </Panel>
        </div>
    );
});
