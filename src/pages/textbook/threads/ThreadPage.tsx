import React from 'react';
import {observer} from "mobx-react-lite";
import {Panel} from "rsuite";
import PageContent from "@/components/PageContent";
import {ThreadStats} from "@/components/Textbook/Threads/ThreadStats";
import {useStores} from "@/hooks/useStores";
import {ThreadsList} from "@/components/Textbook/Threads/ThreadsList";

export const ThreadPage = observer(() => {

    const { threadsStore } = useStores();
    const { currentLoadedThreads } = threadsStore;

    return (
        <PageContent bodyFill>
            <Panel header={<h3 className="title">Threads</h3>}>
                <>
                    <ThreadStats/>

                    <Panel
                        className="thread-page-cards"
                    >
                        <ThreadsList threads={currentLoadedThreads}/>
                    </Panel>
                </>
            </Panel>
        </PageContent>
    )
})