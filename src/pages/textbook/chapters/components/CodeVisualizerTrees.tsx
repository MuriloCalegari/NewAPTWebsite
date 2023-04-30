import React from "react";
import { observer } from "mobx-react-lite";
import { Col, Grid, Row } from "rsuite";
import Editor, { EditorProps } from "@monaco-editor/react";
import { Tree } from "react-tree-graph";
import "react-tree-graph/dist/style.css";

export const CodeVisualizerTrees = observer((props: EditorProps) => {
  const data = {
    name: "1",
    children: [
      {
        name: "2",
        children: [{ name: "4" }, { name: "5" }],
      },
      {
        name: "3",
        children: [{ name: "6" }, { name: "7" }],
      },
    ],
  };

  return (
    <Grid style={{ width: "100%" }}>
      <Row>
        <Col xs={24} md={12}>
          <Editor
            height="200px"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            {...props}
          />
        </Col>
        <Col xs={24} md={12}>
          <div style={{ height: "200px" }}>
            <Tree
              data={data}
              height={200}
              width={200}
              svgProps={{ className: "custom" }}
            />
          </div>
        </Col>
      </Row>
    </Grid>
  );
});
