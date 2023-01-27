import React from "react";
import {observer} from "mobx-react-lite";
import {Col, Grid, Stack, Tag, Row, Button} from "rsuite";
import CheckRoundIcon from "@rsuite/icons/CheckRound";
import WarningRoundIcon from '@rsuite/icons/WarningRound';
import {ListItem, ListItemButton, ListItemSecondaryAction, ListItemText} from "@mui/material";
import {Apt} from "@/data/model/Apt";
import {SubmitButton} from "@/components/Buttons/SubmitButton";
import {useStores} from "@/hooks/useStores";

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
                        <span>{props.apt.name}</span>
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
}

export const AptListItem = observer((props : AptListItemProps) => {

    const { courseAptsStore } = useStores();

    const { apt } = props;

    return (
        <ListItem key={apt.id} sx={{marginBottom: 0, marginTop: 0, paddingTop: 0, paddingBottom: 0}}>
            <ListItemButton onClick={props.onClick} sx={{marginRight: 8, paddingRight: 1, paddingTop: "4px", paddingBottom: "4px"}}>
                <ListItemText primary={renderItemBody(props)}>Teste</ListItemText>
            </ListItemButton>
            <ListItemSecondaryAction>
                <SubmitButton onClick={() => courseAptsStore.openSubmitFileModal(apt)}/>
            </ListItemSecondaryAction>
        </ListItem>
    );
});