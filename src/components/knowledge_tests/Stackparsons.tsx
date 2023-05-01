import { defaultListboxReducer } from "@mui/base";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import {Divider, List, Message } from "rsuite";


//How to format Question Data for Problem
const data = [
  {
    question: "Assume you are given the string '89CS3'. Let's say we push the string to a stack character by character. What would the order of the stack look like? The first character we would pop off the stack should be at the top of the list.",
    code:  [{id: 0, text: "3", position: 0},
      {id: 1, text: "9", position: 3 },
      {id: 2, text: "8", position: 4 },
      {id: 3, text: "C", position: 2 },
      {id: 4, text: "S", position: 1}
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
      <p className="question">{(data[0].question)}</p>
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
