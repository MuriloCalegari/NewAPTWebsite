import React, { useState } from 'react';

function StackLesson() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const pushItem = () => {
    const newStack = [...stack];
    newStack.push(inputValue);
    setStack(newStack);
    setInputValue('');
  };

  const popItem = () => {
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  };

  const peekItem = () => {
    alert(`The top item is ${stack[stack.length - 1]}`);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Stacks Lesson</h1>
      <p>
        A stack is a data structure that follows the Last-In/First-Out (LIFO) principle. The last item added to the stack is the first item to be removed. Think of it like a stack of plates - you always remove the top plate first.
      </p>
      <p>
        In programming, stacks are commonly used for keeping track of function calls, undo/redo functionality, and in algorithms such as depth-first search.
      </p>
      <h2>Stack Operations</h2>
      <p>Here are the basic operations that can be performed on a stack:</p>
      <ul>
        <li><strong>Push:</strong> Add an item to the top of the stack.</li>
        <li><strong>Pop:</strong> Remove the top item from the stack.</li>
        <li><strong>Peek:</strong> Look at the top item without removing it.</li>
      </ul>
      <h2>Stack Example</h2>
      <p>Here's an example of a stack that you can interact with:</p>
      <div>
        <label htmlFor="stack-input">Enter a new item to add to the stack:</label>
        <input type="text" id="stack-input" value={inputValue} onChange={handleInputChange} />
        <button onClick={pushItem}>Push</button>
        <button onClick={popItem}>Pop</button>
        <button onClick={peekItem}>Peek</button>
      </div>
      <div>
        <p>The current stack:</p>
        {stack.length === 0 ? <p>The stack is empty.</p> : (
          <ul>
            {stack.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

export default StackLesson;
