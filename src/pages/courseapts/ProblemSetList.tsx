import React from "react";
import {observer} from "mobx-react-lite";
import {ProblemSetItem} from "@/pages/courseapts/ProblemSetItem";
import {List} from "@mui/material";
import {useStores} from "@/hooks/useStores";
import {AptDrawer} from "@/pages/courseapts/AptDrawer";
import {ProblemSet} from "@/data/model/ProblemSet";

interface ProblemSetListProps {
    problemSets: ProblemSet[];
}

export const ProblemSetList = observer((props : ProblemSetListProps) => {

    const { courseAptsStore } = useStores();

    return (
        <>
            <List>
                {props.problemSets.map((problemSet, index) => {
                    return <ProblemSetItem problemSet={problemSet} index={index}/>
                })}
            </List>
            <AptDrawer open={courseAptsStore.isDrawerOpen} apt={courseAptsStore.currentLoadedApt}/>
        </>
    );
});