import {observer} from "mobx-react-lite";
import React from "react";
import {List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import {Progress} from "rsuite";
import {AptListItem} from "@/pages/courseapts/AptListItem";
import {useStores} from "@/hooks/useStores";
import {ProblemSet} from "@/data/model/ProblemSet";

interface ProblemSetItemProps {
    problemSet: ProblemSet;
    index: number;
}

function getStrokeColor(percentage: number) {
    if(percentage > 80) {
        return "#4CAF50";
    } else if(percentage > 50) {
        return "#FFB300";
    } else {
        return "#F44336";
    }
}

export const ProblemSetItem = observer((props : ProblemSetItemProps) => {

    const { courseAptsStore } = useStores();

    console.log("ProblemSetItem: " + props.problemSet.name);

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <ListItem key={props.problemSet.id}>
                <ListItemButton onClick={() => setOpen(!open)}>
                    <ListItemAvatar>
                        <ArrowRightLineIcon rotate={open ? 90 : 0}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.problemSet.name}
                    />
                    <Progress.Line
                        percent={props.problemSet.percentageComplete}
                        strokeColor={getStrokeColor(props.problemSet.percentageComplete)}
                        strokeWidth={10}
                        style={{width: '250px'}} />
                </ListItemButton>
            </ListItem>
            {open &&
                <>
                    <List style={{paddingLeft: 48, paddingRight: 24}}>
                        {props.problemSet.apts.map((apt) => {
                            return <AptListItem apt={apt} onClick={() => courseAptsStore.openDrawer(apt)}/>
                        })}
                    </List>
                </>
            }
        </>
    )
});