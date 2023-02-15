import {Question} from "@/pages/textbook/chapters/components/MultipleChoiceQuestion";

export const lists_questions : Question[] = [
    {
        type: "multiple_choice",
        question: "Which of the following is a proper way to define a list in JavaScript?",
        answers: [
            {
                text: "const list = [1, 2, 3, 4, 5];",
                correct: true,
                explanation: "That's correct!"
            },
            {
                text: "const list = (1, 2, 3, 4, 5);",
                correct: false,
                explanation: "That's not correct. You can't define a list like that."
            },
            {
                text: "const list = {1, 2, 3, 4, 5};",
                correct: false,
                explanation: "That's not correct. You can't define a list like that."
            },
            {
                text: "const list = 1, 2, 3, 4, 5;",
                correct: false,
                explanation: "That's not correct. You can't define a list like that."
            }
        ]
    },
    {
        type: "multiple_choice",
        question: "Which of the following is a proper way to define a list in JavaScript?",
        answers: [
            {
                text: "const list = [1, 2, 3, 4, 5];",
                correct: true,
                explanation: "That's correct!"
            },
            {
                text: "const list = (1, 2, 3, 4, 5);",
                correct: false,
                explanation: "That's not correct. You can't define a list like that."
            },
            {
                text: "const list = {1, 2, 3, 4, 5};",
                correct: false,
                explanation: "That's not correct. You can't define a list like that."
            },
            {
                text: "const list = 1, 2, 3, 4, 5;",
                correct: false,
                explanation: "That's not correct. You can't define a list like that."
            }
        ]
    },
];