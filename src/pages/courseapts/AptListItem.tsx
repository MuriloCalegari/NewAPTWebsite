import React from "react";
import {observer} from "mobx-react-lite";
import {Col, Grid, Stack, Tag, Row, Button} from "rsuite";
import CheckRoundIcon from "@rsuite/icons/CheckRound";
import WarningRoundIcon from '@rsuite/icons/WarningRound';
import {ListItem, ListItemButton, ListItemSecondaryAction, ListItemText} from "@mui/material";
import {Apt} from "@/data/model/Apt";
import {SubmitButton} from "@/components/Buttons/SubmitButton";

interface AptListItemProps {
    apt: Apt
    onClick: () => void;
}

function renderDifficultyTag(difficulty: string) {
    switch (difficulty) {
        case "MEDIUM":
            return <Button size="sm" color="yellow" appearance="ghost" style={{fontSize: "12px", lineHeight: "16px", cursor:"default"}}>Medium</Button>;
        case "HARD":
            return <Button size="sm" color="red" appearance="ghost" style={{fontSize: "12px", lineHeight: "16px", cursor:"default"}}>Hard</Button>;
        case "EASY":
        default:
            return <Button size="sm" color="green" appearance="ghost" style={{fontSize: "12px", lineHeight: "16px", cursor:"default"}}>Easy</Button>;
    }
}

function renderStatusTag(status: "DONE" | "INCOMPLETE" | "NOT_STARTED") {
    switch (status) {
        case "DONE":
            return <Tag color="green"><><CheckRoundIcon style={{marginTop: -2, marginRight: 2}}/> Done</></Tag>
        case "INCOMPLETE":
            return <Tag color="yellow"><WarningRoundIcon style={{marginTop: -2, marginRight: 2}}/> Incomplete</Tag>
        case "NOT_STARTED":
        default:
            return <Tag color="red"><WarningRoundIcon style={{marginTop: -2, marginRight: 2}}/> Not started</Tag>
    }
}

function renderItemBody(props: AptListItemProps) {
    return(
        <Grid fluid style={{marginLeft: 16, marginBottom: 4, marginTop: 4, padding:0}} onClick={props.onClick}>
            <Row style={{display: 'flex', alignItems: "center"}}>
                <Col xs={16} >
                    <Stack spacing={12}>
                        <span style={{color: "#575757"}}>{props.apt.name}</span>
                        {renderDifficultyTag(props.apt.difficulty)}
                    </Stack>
                </Col>
                <Col xs={8} style={{textAlign:'right'}}>
                    <Stack spacing={12} justifyContent={"flex-end"}>
                        {renderStatusTag(props.apt.status)}
                    </Stack>
                </Col>
            </Row>
        </Grid>
    )
    // return (
    //     <Stack spacing={8}>
    //         {props.apt.name}
    //         {renderDifficultyTag(props.apt.difficulty)}
    //         {renderStatusTag(props.apt.status)}
    //     </Stack>
    // );
}

export const AptListItem = observer((props : AptListItemProps) => {

    return (
        <ListItem key={props.apt.id}>
            <ListItemButton onClick={props.onClick} style={{marginRight: 66, paddingRight: 6}}>
                <ListItemText primary={renderItemBody(props)}>Teste</ListItemText>
            </ListItemButton>
            <ListItemSecondaryAction>
                <SubmitButton/>
            </ListItemSecondaryAction>
        </ListItem>
    );
});

// <Button appearance="subtle" style={{width: "100%",}}>
//     <Grid fluid style={{marginLeft: 16, marginRight: 16, marginBottom: 4, marginTop: 4}} onClick={props.onClick}>
//         <Row style={{display: 'flex', alignItems: "center"}}>
//             <Col xs={8} >
//                 <Stack spacing={12}>
//                     <span style={{color: "#575757"}}>{props.apt.name}</span>
//                     {renderDifficultyTag(props.apt.difficulty)}
//                 </Stack>
//             </Col>
//             <Col xs={16} style={{textAlign:'right'}}>
//                 <Stack spacing={12} justifyContent={"flex-end"}>
//                     {renderStatusTag(props.apt.status)}
//                     <IconButton size="sm" icon={<FileUploadIcon />}>
//                         Submit
//                     </IconButton>
//                 </Stack>
//             </Col>
//         </Row>
//     </Grid>
// </Button>