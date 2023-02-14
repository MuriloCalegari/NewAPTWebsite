import React from 'react';
import ReactDOM from 'react-dom';
import QuizPage from './Quiz';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
