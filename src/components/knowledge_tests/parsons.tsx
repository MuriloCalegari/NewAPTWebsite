import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import {Divider, List, Message } from "rsuite";

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

export const Parsons = observer(() => {
  const [list, updateList] = useState([]);
  const [solution, updateSolution] = useState(false);
  const [pressed, updatePress] = useState(
    new Array((data[0].code).length).fill(false)
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
          updateSolution(false);
          return;
        }
      }
      updateSolution(true);
    } else {
      updateSolution(false);
    }};

  return (
    <div className="blue">
      
      <div className="parsons">
        <List>
          {(data[0].code).map(({ text, position }, index) => (
            <List.Item className="codeLine" key={index} index={index}>
            <div className="codeText">
              {text}
            </div>    
            <div className="Insertborder">
              <button className="Insertbutton" onClick={() => insertData(text, position, index)} disabled = {pressed[index]}> 
                  Insert 
              </button>
            </div>
            
            </List.Item>
          ))}
        </List>
        <List sortable onSort={handleSortEnd}>
          {list.map(({ text}, index) => (
            <List.Item key={index} index={index}>
              {text}
            </List.Item>
          ))}
        </List>
      </div>
      <button className="Submitbutton" onClick={() => handleSubmission(data[0].answerLength())}> Submit </button>
      {solution ? 
        <Message showIcon type="success" header="Success">
        Detailed description and advices about successful copywriting.
      </Message>: <div></div>}
    </div>
  );
})

//ReactDOM.render(<App />, document.getElementById("root"));
