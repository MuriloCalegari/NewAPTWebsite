import ListsWarmup from "@/pages/textbook/chapters/ListsWarmup.mdx";
import React from "react";

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
                }
            ]
        }
    ];

export const chapterParts : Part[] = chapters.flatMap((chapter) => chapter.parts);