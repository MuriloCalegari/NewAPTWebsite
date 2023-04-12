import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { getLastMessage } from "@/utils/queryFixie";
import {Container, Content, IconButton, Panel, Stack} from "rsuite";
import CloseIcon from "@rsuite/icons/Close";
import {useStores} from "@/hooks/useStores";

interface TextbookAIProps {
    text: string;
}

export const TextbookAI = observer(({ text }: TextbookAIProps) => {
    const [lastMessage, setLastMessage] = useState<string | null>(null);

    const { textbookStore } = useStores();

    const handleQuerySubmit = async () => {
        const query = `Please summarize the following text: ${text}`
        const message = await getLastMessage(query);
        setLastMessage(message);
    };

    function renderHeader() {
        return (
            <Stack justifyContent={"space-between"}>
                <b>Ask AI</b>
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
            <Panel header={renderHeader()} shaded className={"chat-container"}>
                <Container>
                    <Content className={"messages-container"}>
                        <p><b>Selection: </b>&quot;{text}&quot;</p>
                        <button onClick={handleQuerySubmit}>Summarize</button>

                        {lastMessage && (
                            <div>
                                <p>Last message:</p>
                                <p>{lastMessage}</p>
                            </div>
                        )}
                    </Content>
                </Container>
            </Panel>
        </div>
    );
});
