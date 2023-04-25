import React from "react";
import {observer} from "mobx-react-lite";
import {Thread} from "@/data/model/Thread";
import {List, PanelGroup} from "rsuite";
import {useStores} from "@/hooks/useStores";
import {ThreadContainer} from "@/components/Textbook/TextbookThreads";

interface ThreadsListProps {
    threads: Thread[];
}

export const ThreadsList = observer((props : ThreadsListProps) => {

    const { textbookStore } = useStores();

    return <PanelGroup>
        <List hover>
            {
                textbookStore.threads.map((thread) => {
                    return (
                        <List.Item
                            className={"thread-list-item"}
                            style={{cursor: "pointer"}}
                            onClick={() => { textbookStore.setActiveThread(thread) }}
                        >
                            <ThreadContainer thread={thread}/>
                        </List.Item>
                    )
                })
            }
        </List>
    </PanelGroup>
});