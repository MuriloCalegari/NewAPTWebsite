import React from 'react';
import {observer} from "mobx-react-lite";
import {Alignment, Fit, Layout, StateMachineInput, useRive, useStateMachineInput} from "@rive-app/react-canvas";
// @ts-ignore
import loadingCheckErrorRiv from "@/media/animations/loading_check_error.riv";
import useSound from "use-sound";
// @ts-ignore
import successSound from "@/media/animations/success_sound.mp3";
// @ts-ignore
import errorSound from "@/media/animations/wrong_sound.mp3";
import { Button } from 'rsuite';

interface IProcessingCheckError {
    status: "IDLE" | "PROCESSING" | "SUCCESS" | "FAILURE";
    onSeeSubmissionClick: () => void;
}

const STATE_MACHINE_NAME = 'State Machine 1';
export const ProcessingCheckError = observer((props : IProcessingCheckError) => {

    console.log("ProcessingCheckError re-rendered");

    const { rive : riveInstance, RiveComponent } = useRive(
        {
            src: loadingCheckErrorRiv,
            autoplay: true,
            stateMachines: STATE_MACHINE_NAME,
            layout: new Layout({
                fit: Fit.Cover,
                alignment: Alignment.Center,
            }),
        },
        {
            fitCanvasToArtboardHeight: true,
        }
    );

    const [playSuccessAudio] = useSound(successSound, { volume: 0.5 });
    const [playErrorAudio] = useSound(errorSound, { volume: 0.5 });

    const [ isAnimationDone, setIsAnimationDone ] = React.useState(false);

    const trigSuccess: StateMachineInput | null = useStateMachineInput(
        riveInstance,
        STATE_MACHINE_NAME,
        'Check'
    );

    const trigError: StateMachineInput | null = useStateMachineInput(
        riveInstance,
        STATE_MACHINE_NAME,
        'Error'
    );

    const finishAnimation = () => {
        riveInstance?.pause();
        setIsAnimationDone(true);
    }

    function triggerSuccess() {
        if(isAnimationDone) return;
        trigSuccess?.fire();
        setTimeout(playSuccessAudio, 450);
        // avoid unnecessary memory consumption by pausing the animation after 3 seconds
        setTimeout(() => {
            finishAnimation()
        }, 2000);
    }

    function triggerFailure() {
        if(isAnimationDone) return;
        trigError?.fire();
        setTimeout(playErrorAudio, 450);
        setTimeout(() => {finishAnimation()}, 1750);
        console.log("FAILURE");
    }

// Controls the changes in the submission state and triggers different animations on Rive
    switch (props.status) {
        case "IDLE":
            console.log("IDLE");
            break;
        case "PROCESSING":
            console.log("PROCESSING");
            break;
        case "SUCCESS":
            triggerSuccess();
            console.log("SUCCESS");
            break;
        case "FAILURE":
            triggerFailure();
            break;
    }

    return (
        <>
            <RiveComponent className="rive-component"/>
            <span className={`submission-result-message ${isAnimationDone ? "display" : ""}`}>
                {props.status === "SUCCESS" ? "Allll green!" : "Hmmm, some tests cases failed..."}
            </span>
            <Button
                appearance={"subtle"}
                className={`submission-see-results-button ${isAnimationDone ? "display" : ""}`}
                onClick={props.onSeeSubmissionClick}>
                See submission
            </Button>
        </>
    );
});