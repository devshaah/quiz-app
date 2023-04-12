import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Fetch = ( {amount , category, difficulty}) => {
    const count = 0;
    const [data,setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
          setData(request.data.results);
          return request;
        }
        fetchData();
      }, []);

  return (
    <div>
      {data.map(
        (ques)=>
        (<div>
        <h1>Q.){ques.question}</h1>
        <input type='radio' name='ans'/>{ques.incorrect_answers[0]}
        <input type='radio' name='ans'/>{ques.correct_answer}
        <input type='radio' name='ans'/>{ques.incorrect_answers[1]}
        <input type='radio' name='ans'/>{ques.incorrect_answers[2]}
        </div>) 
        )}
    </div>
  )
}

export default Fetch

