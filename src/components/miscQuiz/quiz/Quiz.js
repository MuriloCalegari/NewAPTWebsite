import React, { Component } from 'react';
import QuizForm from './QuizForm';
import QuizFormResult from './QuizFormResult';
//below import is where questions come from
import Quiz from 'react-quiz-component';
import PageContent from "@/components/PageContent";
import {observer} from "mobx-react-lite";


class Quizz extends Component {
	constructor(props){
		super(props);
		this.state = {
			result : null
		}
	}
  
	
  
  

  setResult = (values) =>{
	  this.setState({
	  	result : JSON.stringify(values, null, 2)
	  })
  }


  render() {
    return (
      <div className="Quizz">
       	<QuizForm onSubmit={this.setResult} />
       	<QuizFormResult result={this.state.result}/>
      </div>
    );
	}
};

export default Quizz;
