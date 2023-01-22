import React from 'react'
import {observer} from "mobx-react-lite";
import {Panel, Stack} from "rsuite";
import Copyright from "@/components/Copyright";
import {AptStats} from "@/pages/courseapts/AptStats";
import {ProblemSetList} from "@/pages/courseapts/ProblemSetList";
import {problemSetsData} from "@/data/ProblemSetsData";

export const CourseApts = observer(() => {

    return <Panel header={<h3 className="title">Course APTs</h3>}>
        <>
            <AptStats/>

            <Panel
                className="card"
                header={
                    <Stack justifyContent="space-between">
                        <b>Problem sets</b>
                    </Stack>
                }
            >

                <ProblemSetList problemSets={problemSetsData}/>

            </Panel>
        </>
        <Copyright/>
    </Panel>;
})