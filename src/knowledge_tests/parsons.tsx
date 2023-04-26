import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Divider, List } from "rsuite";

const defaultData = [
  { text: "Roses are red" },
  { text: "Violets are blue" },
  { text: "Sugar is sweet" },
  { text: "And so are you" },
];
let nextId = 0;

const Parsons = () => {
  const [list, updateList] = React.useState<any>([]);
  const insertData = (text: string) => {
    updateList([...list, text]);
  };

  const handleSortEnd = ({ oldIndex, newIndex }) =>
    updateList((prvData) => {
      const moveData = prvData.splice(oldIndex, 1);
      const newData = [...prvData];
      newData.splice(newIndex, 0, moveData[0]);
      return newData;
    }, );

  return (
    <div>
      <List>
        {defaultData.map(({ text }, index) => (
          <List.Item key={index} index={index}>
            {text}
            <button onClick={() => insertData(text)}> Insert </button>
          </List.Item>
        ))}
      </List>
      <Divider> sortable below </Divider>
      <List sortable onSort={ () => handleSortEnd}>
        {list.map(({ text }, index) => (
          <List.Item key={index} index={index}>
            {text}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

ReactDOM.render(<Parsons />, document.getElementById("root"));
