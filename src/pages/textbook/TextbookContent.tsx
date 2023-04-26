import React from "react";
import { observer } from "mobx-react-lite";
import { IconButton, Panel } from "rsuite";
import { MDXProvider } from "@mdx-js/react";
import { useNavigate, useParams } from "react-router-dom";
import { chapterParts } from "@/pages/textbook/chapters/chapters";
import PageContent from "@/components/PageContent";
import ArrowBackIcon from '@rsuite/icons/ArowBack';

export const TextbookContent = observer(() => {
    const { chapter } = useParams();
    const navigate = useNavigate();
    const partToRender = chapterParts.find((part) => part.id === chapter);

    function renderBackButton() {
        return (
            <IconButton
                className="back-button"
                icon={<ArrowBackIcon />}
                onClick={() => { navigate('/contents') }}
            >
            </IconButton>
        );
    }

    return (
        <PageContent bodyFill className="textbook-page" header={renderBackButton()}>
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
        </PageContent>
    );
});
