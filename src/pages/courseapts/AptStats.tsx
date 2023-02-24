import React from "react";
import {observer} from "mobx-react-lite";
import {Col, Panel, Row} from "rsuite";
import * as images from "@/media/charts";

export const AptStats = observer(() => {
    return <Row gutter={30} className="dashboard-header">
        <Col xs={8}>
            <Panel className="trend-box bg-gradient-red">
                <img className="chart-img" src={images.PVIcon}/>
                <div className="title">Total submissions</div>
                <div className="value">15</div>
            </Panel>
        </Col>
        <Col xs={8}>
            <Panel className="trend-box bg-gradient-green">
                <img className="chart-img" src={images.VVICon}/>
                <div className="title">Finished APTs</div>
                <div className="value">8</div>
            </Panel>
        </Col>
        <Col xs={8}>
            <Panel className="trend-box bg-gradient-blue">
                <img className="chart-img" src={images.UVIcon}/>
                <div className="title">Remaining</div>
                <div className="value">23</div>
            </Panel>
        </Col>
    </Row>;
})