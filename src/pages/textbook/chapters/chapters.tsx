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

export interface Chapter {
    id: string;
    title: string;
    parts : Part[];
}

export interface Part {
    id: string;
    title: string;
    content: any;
}

export const chapters : Chapter[] =
    [
        {
            id: "stacks",
            title: "Learning about Stacks",
            parts: [

                // {
                //     id: "stacks",
                //     title: "Stacks - Traditional Textbook Chapter",
                //     content: <Stacks/>,
                // },
                {
                    id: "stacks1",
                    title: "Stacks1 - Problem-Solving Chapter",
                    content: <Stacks1/>,
                },
               
            ]
        },
        {
            id: "trees",
            title: "Learning about Trees",
            parts: [

                // {
                //     id: "trees",
                //     title: "Trees - Traditional Textbook Chapter",
                //     content: <Trees/>,
                // },
                // {
                //     id: "trees1",
                //     title: "Trees - Problem-Solving Chapter",
                //     content: <Trees1/>,
                // },
                // {
                //     id: "trees2",
                //     title: "Trees - Visualizer",
                //     content: <Trees2/>,
                // },
               
            ]
        },
        {
            id: "lists",
            title: "Learning about Lists",
            parts: [
                {
                    id: "lists_warmup",
                    title: "Lists - Traditional Chapter",
                    content: <ListsWarmup/>,
                },
                {
                    id: "lists_inclass",
                    title: "Lists - Collaboration Chapter",
                    content: <ListsInClass/>,
                },

                {
                    id: "lists_postclass",
                    title: "Lists - Problem-Solving Chapter",
                    content: <ListsPostClass/>,
                },

            ]
        },
        
        {
            id: "arraylists",
            title: "Learning about ArrayLists",
            parts: [
                {
                    id: "debugging",
                    title: "Debugging",
                    content: <Debugging/>,
                },
            ]
        },

        {
            id: "linkedlists",
            title: "Learning about LinkedLists",
            parts: [
                {
                    id: "lists_warmup",
                    title: "Warmup",
                    content: <ListsWarmup/>,
                },
                {
                    id: "lists_inclass",
                    title: "In Class",
                    content: <ListsInClass/>,
                },

                {
                    id: "lists_postclass",
                    title: "Post Class",
                    content: <ListsPostClass/>,
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
                },
            ]
        },
        

        
    ];

export const chapterParts : Part[] = chapters.flatMap((chapter) => chapter.parts);
