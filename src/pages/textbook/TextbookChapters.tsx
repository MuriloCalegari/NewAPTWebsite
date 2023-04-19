import React from "react";
import { observer } from "mobx-react-lite";
import PageContent from "@/components/PageContent";
import { Panel, PanelGroup, Progress } from "rsuite";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { chapters, Part } from "@/pages/textbook/chapters/chapters";

export const TextbookChapters = observer(() => {

    const navigate = useNavigate();

    function goToPart(part: Part) {
        navigate(`/content/${part.id}`);
    }

    return (<PageContent bodyFill className="textbook-page" header={<h3 className="title" style={{ marginTop: 20 }}>Textbook Name</h3>}>

        <Panel collapsible bordered className="section" header={
            <div>
                <div> Assigned Readings </div>
                <div> Required | Due Wednesday, May 9 | Complete all 4 of them</div>
                <Progress.Line style={{ width: "100%" }} percent={75} showInfo={false} strokeColor={"var(--blue)"} />
            </div>}>

            <div>
                <div>
                    <Progress.Circle showInfo={false} className="circle" percent={100} />
                    <div>Chapter 1</div>
                </div>
                <div>Chapter 2</div>
                <div>Chapter 3</div>
            </div>

        </Panel>

        <Panel collapsible bordered className="section">
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

        </Panel>


    </PageContent>
    );
});