import {Question} from "@/pages/textbook/chapters/components/MultipleChoiceQuestion";

export const stacks_questions : Question[] = [
    {
        type: "multiple_choice",
        question: "What is a stack in computer science?",
        answers: [
            {
                text: "A data structure that follows a last-in, first-out (LIFO) order",
                correct: true,
                explanation: "That's correct!"
            },
            {
                text: "A data structure that follows a first-in, first-out (FIFO) order",
                correct: false,
                explanation: "That's not correct. That's a queue."
            },
            {
                text: "A data structure that allows for constant time random access to elements",
                correct: false,
                explanation: "That's not correct. That's an array."
            },
            {
                text: "A data structure that allows for constant time search and insertion of elements",
                correct: false,
                explanation: "That's not correct. That's a hash table."
            }
        ]
    },
    {
        type: "multiple_choice",
        question: "Which of the following is the correct order of operations for a stack?",
        answers: [
            {
                text: "Push, Pop, Peek, isEmpty",
                correct: true,
                explanation: "That's correct! You typically push elements onto the stack, then pop elements off the top, peek at the top element without removing it, and check if the stack is empty."
            },
            {
                text: "Peek, Push, Pop, isEmpty",
                correct: false,
                explanation: "That's not correct. Peek comes after pushing elements onto the stack, and before popping elements off the top."
            },
            {
                text: "Pop, Push, Peek, isEmpty",
                correct: false,
                explanation: "That's not correct. Popping elements off the top comes after pushing elements onto the stack."
            },
            {
                text: "isEmpty, Peek, Pop, Push",
                correct: false,
                explanation: "That's not correct. Checking if the stack is empty typically comes last."
            }
        ]
    },
];
