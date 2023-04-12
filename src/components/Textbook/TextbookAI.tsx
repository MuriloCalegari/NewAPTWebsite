import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { getLastMessage } from "@/utils/queryFixie";

interface TextbookAIProps {
    text: string;
}

export const TextbookAI = observer(({ text }: TextbookAIProps) => {
    const [lastMessage, setLastMessage] = useState<string | null>(null);

    const handleQuerySubmit = async () => {
        const query = `Please summarize the following text: ${text}`
        const message = await getLastMessage(query);
        setLastMessage(message);
    };

    return (
        <div>
            <h1>Ask AI</h1>
            <p><b>Selection: </b>&quot;{text}&quot;</p>
            <button onClick={handleQuerySubmit}>Summarize</button>


            {lastMessage && (
                <div>
                    <p>Last message:</p>
                    <p>{lastMessage}</p>
                </div>
            )}
        </div>
    );
});
