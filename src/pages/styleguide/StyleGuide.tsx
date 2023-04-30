import React from 'react'
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import gif from "@/media/animations/ListSort.gif";
import {Parsons} from "@/components/knowledge_tests/parsons";

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

export const StyleGuide = observer(() => {
    const navigate = useNavigate();

    function goToContents() {
        navigate(`/contents`);
    }

    return(
       <div className='textbook-page-container'>
        <div className="chapter-title">Here is the Chapter Name</div>
        <div className="estimated-time">Estimated Completion: 5-10 minutes</div>
        <div className='introduction'>
            <div> Python lists are one of the most versatile and widely used data structures 
                in the Python programming language. A list is an <b>ordered collection of elements</b>, 
                which can be of any data type, such as integers, strings, or even other lists.
            </div>
        </div>

        
        <div className='visualization'>
            <img src={gif} alt="loading..." className='gif'/>
            
        </div>

        <div> Explanation View </div>

        <div>Exercise instructions</div>

        <div>
            Code Terminal
        </div>

        <div>Check your understanding</div>

        <div>parsons problems</div>
            <Parsons/>

        </div>


    );
})