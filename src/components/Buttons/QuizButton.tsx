import React from "react";
import {ButtonProps, Button} from "rsuite";
import {observer} from "mobx-react-lite";

export interface QuizButtonProps extends ButtonProps {

}

export const QuizButton = observer(( props : QuizButtonProps ) => {
    return <Button>Quiz</Button>
        
});