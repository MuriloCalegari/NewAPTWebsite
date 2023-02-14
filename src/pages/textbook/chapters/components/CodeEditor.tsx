import React from "react";
import {observer} from "mobx-react-lite";
import Editor from "react-simple-code-editor";
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

export const CodeEditor = observer(() => {
    const [code, setCode] = React.useState(
        `def average(sentencelist):
        wordsinsentence = 0
        for item in sentencelist:
            wordsinitem = item.split()
            wordsinindividualsentence = wordsinitem.count(" ") + 1
            wordsinsentence = wordsinsentence + wordsinindividualsentence
        numberofsentences = len(sentencelist)
        result = wordsinsentence/numberofsentences
        print(result)
        return result`
    );
    return (
        <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
            }}
        />
    );
});