import React from "react";
import ListsWarmup from "@/pages/textbook/chapters/ListsWarmup.mdx";
import ListsInClass from "@/pages/textbook/chapters/ListsInClass.mdx";
import ListsPostClass from "@/pages/textbook/chapters/ListsPostClass.mdx";
import Debugging from "@/pages/textbook/chapters/Debugging.mdx";
import Stacks from "@/pages/textbook/chapters/stacks.mdx";
import Stacks1 from "@/pages/textbook/chapters/stacks1.mdx";
import Trees from "@/pages/textbook/chapters/trees.mdx";
import Trees1 from "@/pages/textbook/chapters/trees1.mdx";
import Trees2 from "@/pages/textbook/chapters/trees2.mdx";
import { mockDifferentUsers } from "@/data/mock";
import { faker } from "@faker-js/faker/locale/en";
import { User } from "@/data/model/User";


export interface Chapter {
    id: string;
    title: string;
    parts : Part[];
    rewards: string;
}

export interface Part {
    id: string;
    title: string;
    content: any;
    description: string;
    activeUsers: User[];
}

//export interface Reward {
//    rewards: string;
//}

export const chapters : Chapter[] =
    [
        {
            id: "stacks",
            title: "Learning about Stacks",
            parts: [

                {
                    id: "stacks",
                    title: "Stacks - Traditional Textbook Chapter",
                    content: <Stacks/>,
                    description: "This lesson introduces stacks.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },
                {
                    id: "stacks1",
                    title: "Stacks1 - Problem-Solving Chapter",
                    content: <Stacks1/>,
                    description: "This lesson continues exploring stacks.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },  
            ],
            rewards: "Red, Blue, Green"
            
        },
        {
            id: "trees",
            title: "Learning about Trees",
            parts: [

                {
                    id: "trees",
                    title: "Trees - Traditional Textbook Chapter",
                    content: <Trees/>,
                    description: "This lesson introduces trees.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },
                {
                    id: "trees1",
                    title: "Trees - Problem-Solving Chapter",
                    content: <Trees1/>,
                    description: "This lesson continues exploring trees.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },
                {
                    id: "trees2",
                    title: "Trees - Visualizer",
                    content: <Trees2/>,
                    description: "This lesson continues exploring trees and includes a Visualizer.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },
               
            ],
            rewards: "Purple, Black, Pink"
        },
        {
            id: "lists",
            title: "Learning about Lists",
            parts: [
                {
                    id: "lists_warmup",
                    title: "Lists - Traditional Chapter",
                    content: <ListsWarmup/>,
                    description: "This lesson introduces lists.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },
                {
                    id: "lists_inclass",
                    title: "Lists - Collaboration Chapter",
                    content: <ListsInClass/>,
                    description: "This lesson is a collaborative chapter centered around lists.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },

                {
                    id: "lists_postclass",
                    title: "Lists - Problem-Solving Chapter",
                    content: <ListsPostClass/>,
                    description: "This lesson is a problem-solving chapter surrounding lists.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },

            ],
            rewards: "Violet, Orange, Lime"
        },
        
        {
            id: "arraylists",
            title: "Learning about ArrayLists",
            parts: [
                {
                    id: "debugging",
                    title: "Debugging",
                    content: <Debugging/>,
                    description: "This lesson introduces ArrayLists and dives into debugging topics.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },
            ],
            rewards: "Rose, Teal, Lavender"
        },

        {
            id: "linkedlists",
            title: "Learning about LinkedLists",
            parts: [
                {
                    id: "lists_warmup",
                    title: "Warmup",
                    content: <ListsWarmup/>,
                    description: "This lesson is a warmup that introduces LinkedLists.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },
                {
                    id: "lists_inclass",
                    title: "In Class",
                    content: <ListsInClass/>,
                    description: "This lesson more throughly introduces LinkedLists and allows for following along in class.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },

                {
                    id: "lists_postclass",
                    title: "Post Class",
                    content: <ListsPostClass/>,
                    description: "This lesson concludes the LinkedLists section and includes a post class exercise.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },
              /* {
                    id: "exercises",
                    title: "Exercises",
              //      content: <Dictionaries/>,
                },*/
                {
                    id: "lists_inclass",
                    title: "In Class",
                    content: <ListsInClass/>,
                    description: "This lesson goes through previous topics and will be completed in lecture.",
                    activeUsers: mockDifferentUsers(faker.datatype.number({min: 1, max: 5}))
                },
            ],
            rewards: "Indigo, Periwinkle, Scarlet"
        },
        

        
    ];

export const chapterParts : Part[] = chapters.flatMap((chapter) => chapter.parts);
//export const chapterRewards : string = chapters.flatMap((chapter) => chapter.rewards ?? "");
