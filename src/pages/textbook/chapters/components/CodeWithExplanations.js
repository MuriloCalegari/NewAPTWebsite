import React, { useState } from "react";
import "./CodeWithExplanations.css";

const CodeWithExplanations = ({ codeLines, explanations }) => {
  const [highlightedLine, setHighlightedLine] = useState(-1);

  return (
    <div className="code-explanations-container">
      <pre className="code-block">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className="code-line"
            onMouseEnter={() => setHighlightedLine(index)}
            onMouseLeave={() => setHighlightedLine(-1)}
          >
            {line}
          </div>
        ))}
      </pre>
      <ul className="explanations-list">
        {explanations.map((explanation, index) => (
          <li
            key={index}
            className={
              "explanation " + (highlightedLine === index ? "highlight" : "")
            }
          >
            {explanation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodeWithExplanations;
