import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Quiz from 'react-quiz-component';

const rootReducer = combineReducers({
  form: formReducer
});

export default createStore(rootReducer);
