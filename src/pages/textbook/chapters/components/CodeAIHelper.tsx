import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Input } from 'rsuite';
import { callAPI } from "@/utils/queryFixie";
import { Icon } from '@rsuite/icons';
import { ImSpinner2 } from "react-icons/im"

export const CodeAIHelper = observer(() => {
    const [code, setCode] = useState<string>()
    const [helperOpen, setHelperOpen] = useState(false)
    const [aiLoading, setAiLoading] = useState(false)
    const [lastMessage, setLastMessage] = useState<string | null>(null);

    const handleChange = (value: string) => {
        setCode(value)
    }

    const handleAI = async () => {
        const query = `Please tell me if there is anything wrong with this javascript code: \n${code}\n. If there is nothing wrong say nothing is wrong with a quick congraluatory message.`
        setAiLoading(true)
        const message = await callAPI(query);
        setAiLoading(false)
        console.log(typeof (message))
        setLastMessage(message);
    }

    const close = () => {
        setCode("")
        setLastMessage(null)
        setHelperOpen(false)
    }

    const reset = () => {
        setLastMessage(null)
    }

    return (
        <div className="help-ai">
            {helperOpen ? (
                <div className="help-area">
                    <Input className="code-input" as="textarea" rows={20} placeholder="Enter your code here..." onChange={handleChange} />
                    {!aiLoading && !lastMessage ? (
                        <div className="buttons">
                            <button className="help-button-close" onClick={close}>Close</button>
                            <button className="help-button" onClick={handleAI}>Ask AI</button>
                        </div>
                    ) : (
                        <div>
                            {
                                aiLoading ? (
                                    <div className="ai-loader">
                                        <Icon className="rotating" as={ImSpinner2}></Icon>
                                    </div>

                                ) : (
                                    <div>
                                        <p> <b style={{ fontSize: "40px" }}>🤖</b> says...</p>
                                        {lastMessage}
                                        <div className="buttons">
                                            <button className="help-button-close" onClick={close}>Close</button>
                                            <button className="help-button" onClick={reset}>Reset</button>
                                        </div>
                                    </div>)}
                        </div>
                    )}

                </div>
            ) : (
                <button className="help-button" onClick={() => setHelperOpen(true)}>Help AI!</button>
            )
            }
        </div >
    )
})
