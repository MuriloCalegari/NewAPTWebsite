import { Network, Options, DataSet } from "vis-network/standalone";
import { observer } from "mobx-react-lite";
import * as React from "react";
import {EdgeGraphData, NodeGraphData} from "@/pages/textbook/chapters/components/VisJsGraphViewer/sGraph";

export const VisJsGraphViewer = observer((props: {
    nodes: NodeGraphData[];
    edges: EdgeGraphData[];
    style?: React.CSSProperties;
}) => {
    const divRef = React.createRef<HTMLDivElement>();
    const nodes = new DataSet<{
        id: string;
        label?: string;
        color?: string;
        shape?: string;
    }>();
    const edges = new DataSet<{
        id: string;
        from: string;
        to: string;
        label?: string;
        color?: string;
        dashes?: boolean | number[];
        shape?: boolean;
    }>();

    function synchronizeData() {
        const newNodes = new Set<string>();
        for (const n of props.nodes) {
            newNodes.add(n.id);
            nodes.update({
                id: n.id,
                label: n.label !== undefined ? n.label : n.id,
                color: n.color,
                shape: n.shape,
            });
        }
        nodes.forEach(item => {
            if (!newNodes.has(item.id)) {
                nodes.remove(item);
            }
        });

        function getIdOfEdge(e: EdgeGraphData): string {
            if (e.id) {
                return e.id;
            }
            return e.from + "####" + e.to + "|" + e.label;
        }

        const newEdges = new Set<string>();
        for (const n of props.edges) {
            const id = getIdOfEdge(n);
            newEdges.add(id);
            edges.update({
                id: id,
                label: n.label !== undefined ? n.label : "",
                from: n.from,
                to: n.to,
                color: n.color,
                dashes: { dashed: true, dotted: [1, 4], solid: false }[
                n.style || "solid"
                    ],
            });
        }
        edges.forEach(item => {
            if (!newEdges.has(item.id)) {
                edges.remove(item);
            }
        });
    }

    React.useEffect(() => {
        synchronizeData();

        const data = {
            nodes: nodes,
            edges: edges,
        };
        const options: Options = {
            edges: {
                arrows: {
                    to: { enabled: true, scaleFactor: 1, type: "arrow" },
                },
            },
        };
        // @ts-ignore
        const network = new Network(divRef.current!, data, options);
    }, [props.nodes, props.edges]);

    return (
        <div
            className="component-VisJsGraphViewer"
            style={props.style}
            ref={divRef}
        />
    );
});