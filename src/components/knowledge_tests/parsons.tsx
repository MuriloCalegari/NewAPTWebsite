import { defaultListboxReducer } from "@mui/base";
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
      {id: 0, text: "Roses are red", position: 0 },
      {id: 1, text: "Violets are blue", position: -1 },
      {id: 2, text: "Sugar is sweet", position: 1 },
      {id: 3, text: "And so are you", position: -1 }
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
  const [submitted, updateSubmitted] = useState(false);
  const [pressed, updatePress] = useState(
    new Array((data[0].code).length).fill(false)
  );
  
  //Inserting Data into Sortable List
  const insertData = (id, text, position, index) => {
    if (!pressed[index]) {
      updateList([...list, {id: id, text: text, position: position }]);
      handlePressed(index);
    }
  };

  //Updating whether Button has been pressed
  const handlePressed = (id) => {
    updatePress((prevState) => {
      const newPress = [...prevState];
      newPress[id] = !newPress[id];
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
    updateSubmitted(true)
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

  //Reseting Problem
  const handleReset = () =>{
    updateList([])
    updateSolution(false)
    updateSubmitted(false)
    const resetPressed = [...pressed]
    resetPressed.fill(false)
    updatePress(resetPressed)
  }

  //Deleting Data from Sortable List
  const deleteData = (id, index) => {
    const dList = [...list]
    dList.splice(index, 1)
    updateList(dList)
    handlePressed(id)
  }

  return (
    <div className="parsonsProblem">
      <h2 className="question">{(data[0].question)}</h2>
      <div className="parsons">
        <List className="providedCode">
          {(data[0].code).map(({id, text, position }, index) => (
            <List.Item className="codeLine" key={index} index={index}>
            <div className="codeText">
              {text}
            </div> 
               
            <button className="insertButton" onClick={() => insertData(id, text, position, index)} disabled = {pressed[index]}> 
                Insert 
            </button>
            </List.Item>
          ))}
        </List>
        
        <List className="solutionCode" sortable onSort={handleSortEnd}>
            {list.map(({id, text}, index) => (
            <List.Item className="solutionLine" key={index} index={index}>
            <div className="solText">
              {text}
            </div>  

            <button className="deleteButton" onClick={() => deleteData(id, index)}> 
              Delete 
            </button>
          </List.Item>
          ))}
        </List>
      </div>
      <div className="cntrlButtons">
        <button className="resetButton" onClick={() => handleReset()}> Reset</button> 
        <button className="submitButton" onClick={() => handleSubmission(data[0].answerLength())}> Submit </button> 
          {submitted && (solution ?
            <Message showIcon type="success" header="Correct">
            You got the answer right!
            </Message>
            :
            <Message showIcon type="error" header="Try Again">
            Your answer isn't quite right. 
            </Message>)
          }
      </div>
    </div>
  );
})

//ReactDOM.render(<App />, document.getElementById("root"));
