import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import {Divider, List } from "rsuite";

const defaultData = [
  { text: "Roses are red" },
  { text: "Violets are blue" },
  { text: "Sugar is sweet" },
  { text: "And so are you" }
];

//How to format Question Data for Problem
const data = [
  {
    question: "Question Prompt",
    code: [
      { text: "Roses are red", position: 0 },
      { text: "Violets are blue", position: -1 },
      { text: "Sugar is sweet", position: 1 },
      { text: "And so are you", position: -1 }
    ],
    answerLength: function(){
      let exclude = (this.code).filter(line => line.position === -1);
      return (this.code).length - exclude.length
    }
}
];

const App = () => {
  const [list, updateList] = useState([]);
  const [pressed, updatePress] = useState(
    new Array(defaultData.length).fill(false)
  );
  
  //Inserting Data into Sortable List
  const insertData = (text, position, index) => {
    if (!pressed[index]) {
      updateList([...list, { text: text, position: position }]);
      handlePressed(index);
    }
  };

  //Updating whether Button has been pressed
  const handlePressed = (index) => {
    updatePress((prevState) => {
      const newPress = [...prevState];
      newPress[index] = !newPress[index];
      return newPress;
    });
  };

  //How List is Sorted 
  const handleSortEnd = ({ oldIndex, newIndex }) =>
    updateList((prvData) => {
      const moveData = prvData.splice(oldIndex, 1);
      const newData = [...prvData];
      newData.splice(newIndex, 0, moveData[0]);
      return newData;
    }, []);

  //Checking Answer
  const handleSubmission = (answerLen) => {
    if (list.length === answerLen) {
      for (let i = 0; i < list.length; i++) {
        console.log(list[i])
        if (list[i].position !== i){
          console.log("Incorrect");
          updateSolution(false);
          return;
        }
      }
      console.log("Correct");
      updateSolution(true);
    } else {
      console.log("Incorrect");
      updateSolution(false);
    }};

  return (
    <div>
      <List>
        {defaultData.map(({ text }, index) => (
          <List.Item key={index} index={index}>
            {text}
            <button onClick={() => insertData(text)} disabled = {pressed[index]}> 
              Insert 
            </button>
          </List.Item>
        ))}
      </List>
      <Divider> sortable below </Divider>
      <List sortable onSort={handleSortEnd}>
        {list.map(({ text }, index) => (
          <List.Item key={index} index={index}>
            {text}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
