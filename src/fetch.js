import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';


const Fetch = ( {amount , category, difficulty, setquestions, questions}) => {
    const count = 0;
    // const [data,setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
          setquestions(request.data.results);
          return request;
        }
         fetchData();
      }, []);

  return (
    <div>
      <Navbar/>
      <h1>Loading...</h1>
      { navigate("/question")}
    </div>
  )
}

export default Fetch

