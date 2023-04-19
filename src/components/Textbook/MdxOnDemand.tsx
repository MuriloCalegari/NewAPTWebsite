import {observer} from "mobx-react-lite";
import {Highlight} from "@/pages/textbook/chapters/components/Highlight";
import React, {useEffect, useState} from "react";
import {evaluate} from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

interface MdxOnDemandProps {
    content: string;
}

export const MdxOnDemand = observer((props : MdxOnDemandProps) => {

    // @ts-ignore
    const [ content, setContent ] = useState({ default: runtime.Fragment });

    useEffect(
        () => {
            async function compileThreadContent() {
                // @ts-ignore
                const compiledThread = await evaluate(props.content, { ...runtime });
                setContent(compiledThread);
            }

            console.log("Compiling thread content");
            compileThreadContent();

        }, [props.content]
    );

    const MdxContent = content.default;

    return <MdxContent components={{Highlight: (props) => <Highlight>{props.children}</Highlight>}}/>
});