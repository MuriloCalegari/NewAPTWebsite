import React from "react";
import { observer } from "mobx-react-lite";
import { Col, Grid, Row } from "rsuite";
import Editor, { EditorProps } from "@monaco-editor/react";
import { VisJsGraphViewer } from "@/pages/textbook/chapters/components/VisJsGraphViewer/VisJsGraphViewer";

const edges = [
  { "from": "1", "to": "2", "color": "red" },
  { "from": "1", "to": "3" }
];

const nodes = [
  { "id": "1", "label": "1" },
  { "id": "2", "label": "2", "color": "orange" },
  { "id": "3", "label": "3" }
];

export const CodeVisualizer = observer((props: EditorProps) => {
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
          <VisJsGraphViewer
            style={{ height: "200px" }}
            nodes={nodes}
            edges={edges}
          />
        </Col>
      </Row>
    </Grid>
  );
});
