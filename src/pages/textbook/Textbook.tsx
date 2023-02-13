import React from "react";
import {observer} from "mobx-react-lite";
import PageContent from "@/components/PageContent";
import {Panel} from "rsuite";
import {MDXProvider} from "@mdx-js/react";
import Debugging from "@/pages/textbook/chapters/Debugging.mdx";

export const Textbook = observer(() => {
    return (<PageContent bodyFill className="textbook-page">
        <Panel>
            <>
                <Panel
                    className="textbook-card"
                >
                    <MDXProvider>
                        <Debugging/>
                    </MDXProvider>
                </Panel>
            </>
        </Panel>
    </PageContent>
    );
});