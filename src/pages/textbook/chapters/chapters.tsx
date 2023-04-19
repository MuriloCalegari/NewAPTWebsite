import React from "react";
import ListsWarmup from "@/pages/textbook/chapters/ListsWarmup.mdx";
import ListsInClass from "@/pages/textbook/chapters/ListsInClass.mdx";
import ListsPostClass from "@/pages/textbook/chapters/ListsPostClass.mdx";
import Debugging from "@/pages/textbook/chapters/Debugging.mdx";

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

export const chaptersData = [
    // ...
    {
      id: 'runestone-chapter1',
      title: 'Runestone Chapter 1: Your Chapter Title',
      path: '/textbook/chapters/runestone/chapter1',
    },
    {
      id: 'runestone-chapter2',
      title: 'Runestone Chapter 2: Your Chapter Title',
      path: '/textbook/chapters/runestone/chapter2',
    },
  ];

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
            ]
        }
    ];

export const chapterParts : Part[] = chapters.flatMap((chapter) => chapter.parts);
