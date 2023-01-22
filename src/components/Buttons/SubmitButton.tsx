import React from "react";
import {IconButton} from "rsuite";
import FileUploadIcon from "@rsuite/icons/FileUpload";
import {observer} from "mobx-react-lite";

export const SubmitButton = observer(() => {
    return <IconButton size="sm" icon={<FileUploadIcon/>}>
        Submit
    </IconButton>;
});