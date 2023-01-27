import React from "react";
import {ButtonProps, IconButton} from "rsuite";
import FileUploadIcon from "@rsuite/icons/FileUpload";
import {observer} from "mobx-react-lite";

export interface SubmitButtonProps extends ButtonProps {

}

export const SubmitButton = observer(( props : SubmitButtonProps ) => {
    return <IconButton size="sm" icon={<FileUploadIcon/>} {...props}>
        Submit
    </IconButton>;
});