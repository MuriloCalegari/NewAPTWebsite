import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { getParameters } from 'codesandbox/lib/api/define';
import { CodeAIHelper } from "./CodeAIHelper";

export const CodeRunner = observer((props: { javaScriptCode: string, testCode: string }) => {
    const parameters = getParameters({
        files: {
            'index.js': {
                isBinary: false,
                content: "import \"html-console-output\" \n" + props.javaScriptCode,
            },
            'index.test.js': {
                isBinary: false,
                content: props.testCode
            },
            'package.json': {
                content: JSON.stringify({
                    "dependencies": {
                        "html-console-output": "0.8.5",
                        "jest": "20.0.4"
                    }
                }),
                isBinary: false,
            },
        },
    });

    const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&embed=1&query=previewwindow=tests%26fontsize=12%26editorsize=70%26codemirror=0`;

    return (
        <div>
            <iframe
                src={url}
                className={"code-editor-iframe"}
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
            <CodeAIHelper/>
        </div>
    );
});
