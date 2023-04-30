import React from "react";
import { observer } from "mobx-react-lite";
import PageContent from "@/components/PageContent";
import { Panel, PanelGroup, Progress } from "rsuite";
import { List } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { chapters, Part } from "@/pages/textbook/chapters/chapters";
import assignments from "@/data/assignments"

export const TextbookChapters = observer(() => {

    const navigate = useNavigate();

    function goToPart(part: Part) {
        navigate(`/contents/page/${part.id}`);
    }

    function goToStyleGuide() {
        navigate(`/contents/page/styleguide`);
    }   


    return ( 
    
    <PageContent bodyFill className="textbook-page" header={
        <div className="textbook-title">
            Introduction to the Design and Analysis of Algorithms
        </div>
        }>

        <Panel collapsible bordered className="section" header={
            <div style={{marginRight:'-20px'}}>
                <div className="assignments" style={{fontSize:18}}> Assigned Readings </div>
                <div className="assignments" style={{fontSize:14}}> 
                    {new Date(assignments[0].due).toLocaleDateString("en-US", { weekday: 'long' }) + ", " + assignments[0].due} 
                </div>
                <div>
                    <Progress.Line className="progress-bar" percent={75} showInfo={false} strokeColor={"var(--blue)"} />
                </div>
            </div>
            }>
            
            <div>
                    
                        <div className="assignment">
                            <div>
                                <Progress.Circle trailColor='var(--dark-gray)' strokeWidth={20} strokeColor={"var(--green)"} style={{ width: 15, marginLeft: '5px' }} percent={100} showInfo={false} />
                            </div> 
                            <div className="assignment-title" onClick={goToStyleGuide}>
                                <div>Style Guide</div>
                            </div>
                        </div>
                
            </div>
        </Panel>

        <div className="textbook-title" style={{marginLeft:'0px', marginBottom:'20px'}}>
            All Chapters:
        </div>

        

        <PanelGroup accordion className="section">
            {chapters.map((chapter, chapterIndex) => {
                return (
                    <Panel header={<div style={{fontSize:18}}>{(chapterIndex + 1) + ". " + chapter.title}</div>} eventKey={chapter.id}>
                        <List>
                            {chapter.parts.map((part, index) => {
                                return (
                                    <div className="assignment" onClick={() => goToPart(part)}>
                                    <div>
                                        <Progress.Circle trailColor='var(--dark-gray)' strokeWidth={20} strokeColor={"var(--red)"} style={{ width: 15, marginLeft: '5px' }} percent={0} showInfo={false} />
                                    </div> 
                                    <div className="assignment-title">
                                    {(chapterIndex + 1) + "." + (index + 1) + " " + part.title}
                                    </div>
                                    </div>

                                   
                                );
                            })
                            }
                        </List>
                    </Panel>
                );
            })
            }

        </PanelGroup>


    </PageContent>
    );
});