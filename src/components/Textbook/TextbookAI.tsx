import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { callAPI } from "@/utils/queryFixie";
import { Container, Content, IconButton, Panel, Stack } from "rsuite";
import CloseIcon from "@rsuite/icons/Close";
import { useStores } from "@/hooks/useStores";
import { Icon } from '@rsuite/icons';
import { ImSpinner2 } from "react-icons/im"

interface SelectedTextData {
    text: string;
    top: number;
    left: number;
    className: string;
}

interface TextbookAIProps {
    selectedText: SelectedTextData
}

export const TextbookAI = observer(({ selectedText }: TextbookAIProps) => {
    const [lastMessage, setLastMessage] = useState<string | null>(null);
    const [aiLoading, setAiLoading] = useState(false)
    const [queryType, setQueryType] = useState("")
    const { text, top, left, className } = selectedText

    const { textbookStore } = useStores();

    const handleQuery = async (type: string) => {
        let query = ""
        setQueryType(type)
        if (type === "summary") {
            query = `Please summarize the following ${['rs-panel-body', 'code-text-panel'].includes(className) ? "python code" : "text"}: ${text}`
        } else if (type === "expand") {
            query = `Please expand upon the following text: ${text}`
        } else {
            query = `Please give a comprehensive, multi-faceted, code example of the following python concept: ${text}. For the code you provide, please add newline characters between each line of the code.`
        }
        setAiLoading(true)
        const message = await callAPI(query);
        console.log(message)
        setAiLoading(false)
        setLastMessage(message);
    }

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
            <Panel header={renderHeader()} shaded className={"ai-container"}>
                <Container>
                    <Content>
                        <b >Selection: </b><p style={{ fontSize: "10px", marginBottom: "20px" }}>&quot;{text}&quot;</p>
                        {aiLoading ?
                            <div className="ai-loader"><Icon className="rotating" as={ImSpinner2}></Icon></div>
                            :
                            <div>

                                <div className="button-content">
                                    <button className="aiButton" onClick={() => { handleQuery("summary") }}>Summarize</button>
                                    <button className="aiButton" onClick={() => { handleQuery("expand") }}>Expand</button>
                                    <button className="aiButton" onClick={() => { handleQuery("example") }}>Give an Example</button>


                                    {lastMessage &&
                                        <div style={{ marginTop: "20px" }}>
                                            <b>Response: </b>
                                            <p style={{ fontSize: "10px" }} className={queryType === "example" ? "code-text-panel" : "response-panel"}>{lastMessage}</p>
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
