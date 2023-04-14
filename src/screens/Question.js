import React, { useState } from "react";
import "./Question.css";
import Navbar from "../components/Navbar";

const Question = ({ questions }) => {
  var count = 0;
  var opt;
  return (
    <>
      <Navbar/>
    <div  className="container1">
      {questions.map((question) => 
    {
      count = count + 1;
      question.type == "boolean" ?
      ( opt = [
        { name: question.incorrect_answers, id: "false" },
        { name: question.correct_answer, id: "true" }
      ]
      )
      :
      (
        opt = [
        { name: question.incorrect_answers[0], id: "false" },
        { name: question.incorrect_answers[1], id: "false" },
        { name: question.incorrect_answers[2], id: "false" },
        { name: question.correct_answer, id: "true" }
      ])
      opt.sort(() => 0.5 - Math.random());
      console.log(opt);
      return(
      <div className="cont"> 
        <h1 className="question">Q.{count}) {question.question}</h1>
        {
        question.type == "boolean" 
        ?
        <div className="flex">
        <input type="radio" id={opt[0].id} name={count}/>
        <label for={opt[0].id}>{opt[0].name}</label>
        <input type="radio" id={opt[1].id} name={count} />
        <label for={opt[1].id}>{opt[1].name}</label>
        </div>
        :
        <div className="options">
          <div className="flex">
        <input type="radio" id={opt[0].id} name={count} />
        <label for={opt[0].id}>{opt[0].name}</label>
        <input type="radio" id={opt[1].id} name={count} />
        <label for={opt[1].id}>{opt[1].name}</label>
        </div>
        <div className="flex">
        <input type="radio" id={opt[2].id} name={count} />
        <label for={opt[2].id}>{opt[2].name}</label>
        <input type="radio" id={opt[3].id} name={count} />
        <label for={opt[3].id}>{opt[3].name}</label>
        </div>
         </div>
      }
      </div>
      )
    })}
    </div>
    </>
  );
};

export default Question;
