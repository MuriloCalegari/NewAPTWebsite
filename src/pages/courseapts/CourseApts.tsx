import React from 'react'
import { observer } from "mobx-react-lite";
import {Panel, Stack} from "rsuite";
import Copyright from "@/components/Copyright";
import {AptStats} from "@/pages/courseapts/AptStats";
import {ProblemSet, ProblemSetList} from "@/pages/courseapts/ProblemSetList";

const problemSetsData : ProblemSet[] = [
    {
        id: 0,
        name: "Problem Set 1",
        percentageComplete: 50,
        apts: [
            {
                id: 1,
                name: "Totality",
                difficulty: "EASY",
                status: "DONE"
            },
            {
                id: 2,
                name: "AccessLevel",
                difficulty: "EASY",
                status: "DONE"
            },
            {
                id: 3,
                name: "Gravity",
                difficulty: "MEDIUM",
                status: "DONE"
            },
            {
                id: 4,
                name: "Starter",
                difficulty: "HARD",
                status: "INCOMPLETE"
            },
            {
                id: 5,
                name: "CirclesCountry",
                difficulty: "HARD",
                status: "NOT_STARTED"
            },

        ]
    },
    {
        id: 1,
        name: "Problem Set 2",
        percentageComplete: 100,
        apts: [
            {
                id: 1,
                name: "Totality",
                difficulty: "MEDIUM",
                status: "DONE"
            }
        ]
    },
    {
        id: 2,
        name: "Problem Set 3",
        percentageComplete: 65,
        apts: [
            {
                id: 1,
                name: "Totality",
                difficulty: "HARD",
                status: "INCOMPLETE"
            }
        ]
    }
];

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