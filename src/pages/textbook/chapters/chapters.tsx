import React from "react";
import ListsWarmup from "@/pages/textbook/chapters/ListsWarmup.mdx";
import ListsInClass from "@/pages/textbook/chapters/ListsInClass.mdx";
import ListsPostClass from "@/pages/textbook/chapters/ListsPostClass.mdx";
import Debugging from "@/pages/textbook/chapters/Debugging.mdx";
import Sorting from "@/pages/textbook/chapters/runestone/runestone-chapter1.mdx";
import Fopp1 from "@/pages/textbook/chapters/runestone/fopp-1.mdx";
import Fopp2 from "@/pages/textbook/chapters/runestone/fopp-2.mdx";
//import Fopp3 from "@/pages/textbook/chapters/runestone/fopp-3.mdx";
import Fopp4 from "@/pages/textbook/chapters/runestone/fopp-4.mdx";
import Fopp5 from "@/pages/textbook/chapters/runestone/fopp-5.mdx";
//import Fopp6 from "@/pages/textbook/chapters/runestone/fopp-6.mdx";


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
            id: "lists",
            title: "Lists",
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
            ]
        },
        {
            id: "fopp",
            title: "Fundamentals of Python Programming",
            parts: [
                {
                    id: "fopp-1",
                    title: "Break and Continue",
                    content: <Fopp1/>,
                },
                {
                    id: "fopp-2",
                    title: "More About Iteration: Listener Loop",
                    content: <Fopp2/>,
                }, {
                    id: "fopp-4",
                    title: "For Loop Iteration, Assignment, Reassignment",
                    content: <Fopp4/>,
                }, {
                    id: "fopp-5",
                    title: "The Listener Loop",
                    content: <Fopp5/>,
                }, 
            ]
        },
        {
            id: "arraylists",
            title: "ArrayLists",
            parts: [
                {
                    id: "debugging",
                    title: "Debugging",
                    content: <Debugging/>,
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
            ]
        },

        {
            id: "linkedlists",
            title: "LinkedLists",
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

                {
                    id: 'runestone-chapter1',
                    title: 'Runestone Chapter 1: Your Chapter Title',
                    content: <Sorting/>,
                },

                {
                    id: 'runestone-chapter2',
                    title: 'Runestone Chapter 2: Your Chapter Title',
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
        }

        
    ];

export const chapterParts : Part[] = chapters.flatMap((chapter) => chapter.parts);
