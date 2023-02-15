import React from "react";
import {Button, Divider, Form, Radio, RadioGroup} from "rsuite";
import {observer} from "mobx-react-lite";

export interface Question {
    type: "multiple_choice";
    question: string;
    answers: Answer[]
}

export interface Answer {
    text: string;
    correct: boolean;
    explanation: string;
}

export interface MultipleChoiceQuestionProps {
    questions: Question[];
    title: string;
    subtitle: string;
}

const CorrectAnswerCard = observer(({ answer } : {answer: Answer}) => {
    return (
        <>
            <Divider style={{marginTop: "16px"}}/>
            <b><p style={{marginLeft: "12px"}}>{answer?.correct ? "Correct " : "Wrong "} Answer</p></b>
            <p style={{marginLeft: "12px"}}>{answer?.explanation}</p>
        </>
    );
});

interface QuestionCardProps {
    question: Question;
    isChecking: boolean;
}

const QuestionCard = observer(({ question, isChecking } : QuestionCardProps) => {

    const [ selectedAnswer, setSelectedAnswer ] = React.useState<Answer | undefined>();

    return(
        <RadioGroup
            name="radioList"
            className="question-card"
            // @ts-ignore
            onChange={(value) => setSelectedAnswer(value)}
        >
            <p>{question.question}</p>
            {question.answers.map((answer) => {
                return (
                    // @ts-ignore
                    <Radio value={answer}>
                        {answer.text}
                    </Radio>
                );
            })}
            {isChecking && selectedAnswer && <CorrectAnswerCard answer={selectedAnswer}/>}
        </RadioGroup>
    );
});

export const MultipleChoiceQuestion = observer((props: MultipleChoiceQuestionProps) => {

    const [ isChecking, setIsChecking ] = React.useState(false);

    return (
        <Form.Group controlId="radioList" className="mcq-form" >
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            {props.questions.map(
                (question) => <QuestionCard question={question} isChecking={isChecking}/>)}
            <Divider/>
            <Button
                appearance={"primary"}
                color={"green"}
                onClick={() => setIsChecking(!isChecking)}
            >
                Check
            </Button>
        </Form.Group>
    );
})