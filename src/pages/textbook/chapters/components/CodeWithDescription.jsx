import React, { useState } from "react";

const CodeWithDescription = ({ code, descriptions }) => {
  const [activeLine, setActiveLine] = useState(null);

  const onMouseOver = (lineNumber) => {
    setActiveLine(lineNumber);
  };

  const onMouseOut = () => {
    setActiveLine(null);
  };

  return (
    <div className="code-with-description">
      <pre>
        {code.split("\n").map((line, i) => {
          const lineNumber = i + 1;
          const isActive = lineNumber === activeLine;
          const description = descriptions[lineNumber] || "";
          return (
            <div
              key={i}
              className={`code-line ${isActive ? "active" : ""}`}
              onMouseOver={() => onMouseOver(lineNumber)}
              onMouseOut={onMouseOut}
            >
              <span className="line-number">{lineNumber}</span>
              <span className="line-code">{line}</span>
              <span className="line-description">{description}</span>
            </div>
          );
        })}
      </pre>
    </div>
  );
};

export default CodeWithDescription;
