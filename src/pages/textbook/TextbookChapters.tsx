import React from "react";
import {observer} from "mobx-react-lite";
import PageContent from "@/components/PageContent";
import {Panel, PanelGroup} from "rsuite";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {chapters, Part} from "@/pages/textbook/chapters/chapters";

export const TextbookChapters = observer(() => {

    const navigate = useNavigate();

    function goToPart(part: Part) {
        navigate(`/textbook/${part.id}`);
    }

    return (<PageContent bodyFill className="textbook-page" header={<h3 className="title">Textbook</h3>}>
            <Panel>
                <PanelGroup accordion className={"chapter-panel-group"}>
                    {chapters.map((chapter, chapterIndex) => {
                        return (
                            <Panel header={<h5>{(chapterIndex + 1) + ". " + chapter.title}</h5>} eventKey={chapter.id}>
                                <List>
                                    {chapter.parts.map((part, index) => {
                                        return (
                                            <ListItem>
                                                <ListItemButton onClick={() => goToPart(part)}>
                                                    <ListItemText
                                                        primary={(chapterIndex + 1) + "." + (index + 1) + " " + part.title}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        );
                                    })
                                    }
                                </List>
                            </Panel>
                        );
                    })
                    }
                </PanelGroup>
            </Panel>
        </PageContent>
    );
});