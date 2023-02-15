import React from "react";
import ListsWarmup from "@/pages/textbook/chapters/ListsWarmup.mdx";
import ListsInClass from "@/pages/textbook/chapters/ListsInClass.mdx";
import ListsPostClass from "@/pages/textbook/chapters/ListsPostClass.mdx";

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
        }
    ];

export const chapterParts : Part[] = chapters.flatMap((chapter) => chapter.parts);