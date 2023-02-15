import React from "react";
import {observer} from "mobx-react-lite";
import {Panel} from "rsuite";
import {MDXProvider} from "@mdx-js/react";
import {useLocation, useParams} from "react-router-dom";
import {chapterParts} from "@/pages/textbook/chapters/chapters";

export const TextbookContent = observer(() => {

    const location = useLocation();
    const { chapter } = useParams();

    console.log(location);
    console.log(chapter)

    const partToRender = chapterParts.find((part) => part.id === chapter);

    return (
        <Panel>
            <>
                <Panel
                    className="textbook-card"
                >
                    <MDXProvider>
                        {partToRender?.content}
                    </MDXProvider>
                </Panel>
            </>
        </Panel>
    );
});