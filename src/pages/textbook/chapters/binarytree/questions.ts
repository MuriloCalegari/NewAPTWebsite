import {Question} from "@/pages/textbook/chapters/components/MultipleChoiceQuestion";

export const binarytree_questions : Question[] = [
{
    type: "multiple_choice",
    question: "What is a binary tree?",
    answers: [
{
text: "A tree where each node can have at most two children",
correct: true,
explanation: "That's correct!"
},
{
text: "A tree where each node can have any number of children",
correct: false,
explanation: "That's not correct. That's a general tree."
},
{
text: "A tree where each node has only one child",
correct: false,
explanation: "That's not correct. That's a linked list."
},
{
text: "A tree where each node has a parent and a child",
correct: false,
explanation: "That's not correct. That's a binary search tree."
}
]
},
{
type: "multiple_choice",
question: "What is the depth of a binary tree?",
answers: [
{
text: "The number of nodes in the tree",
correct: false,
explanation: "That's not correct. That's the size of the tree."
},
{
text: "The height of the tree",
correct: false,
explanation: "That's not correct. The height of the tree is the number of edges on the longest path from the root to a leaf node."
},
{
text: "The number of leaf nodes in the tree",
correct: false,
explanation: "That's not correct. That's the leaf count of the tree."
},
{
text: "The number of nodes along the longest path from the root node down to the farthest leaf node",
correct: true,
explanation: "That's correct!"
}
]
},
];