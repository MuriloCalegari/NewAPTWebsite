import React from 'react'
import {observer} from "mobx-react-lite";
import {Panel, Stack} from "rsuite";
import {AptStats} from "@/pages/courseapts/AptStats";
import {ProblemSetList} from "@/pages/courseapts/ProblemSetList";
import {problemSetsData} from "@/data/ProblemSetsData";
import PageContent from "@/components/PageContent";

export const CourseApts = observer(() => {

    return <PageContent bodyFill>
                <Panel header={<h3 className="title">Course APTs</h3>}>
                <>
                    <AptStats/>

                    <Panel
                        className="problem-set-cards"
                        header={
                            <Stack justifyContent="space-between">
                                <b>Problem sets</b>
                            </Stack>
                        }
                    >
                        <ProblemSetList problemSets={problemSetsData}/>
                    </Panel>
                </>
            </Panel>
        </PageContent>
})