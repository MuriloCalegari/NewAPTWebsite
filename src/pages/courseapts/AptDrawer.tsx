import React from 'react';
import { observer } from "mobx-react-lite";
import {Drawer, DrawerProps} from "rsuite";
import {Apt} from "@/pages/courseapts/ProblemSetList";
import {useStores} from "@/hooks/useStores";

export interface AptDrawerProps extends DrawerProps {
    apt?: Apt;
}

export const AptDrawer = observer((props: AptDrawerProps) => {

    console.log("AptDrawer: " + props.apt?.name);

    const { courseAptsStore } = useStores();

    return (
        <Drawer {...props} size="full" onClose={() => courseAptsStore.closeDrawer()}>
            {/*<Drawer.Header>*/}
            {/*    /!*<Drawer.Title>*!/*/}
            {/*    /!*    {props.apt?.name}*!/*/}
            {/*    /!*</Drawer.Title>*!/*/}
            {/*    /!*<Drawer.Actions>*!/*/}
            {/*    /!*    <IconButton*!/*/}
            {/*    /!*        icon={<EditIcon />}*!/*/}
            {/*    /!*        onClick={() => setModalState({isModalOpen: true})}*!/*/}
            {/*    /!*        appearance="subtle">*!/*/}
            {/*    /!*        Edit*!/*/}
            {/*    /!*    </IconButton>*!/*/}
            {/*    /!*    <IconButton*!/*/}
            {/*    /!*        icon={<TrashIcon />}*!/*/}
            {/*    /!*        onClick={(event) => {*!/*/}
            {/*    /!*            transactionsStore.deleteTransaction(props.transaction?.transaction_id);*!/*/}
            {/*    /!*            if(props.onClose) props.onClose(event);*!/*/}
            {/*    /!*        }}*!/*/}
            {/*    /!*        appearance="subtle">*!/*/}
            {/*    /!*    </IconButton>*!/*/}
            {/*    /!*</Drawer.Actions>*!/*/}
            {/*</Drawer.Header>*/}
            <Drawer.Body>

            </Drawer.Body>
        </Drawer>
    );
});