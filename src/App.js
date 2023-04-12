import './App.css';
import Fetch from './fetch';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Homescreen from './screens/Homescreen';
import React, { useEffect, useState } from 'react'

function App() {
  const [amount,setamount] = useState("5")
  const [category,setcategory] = useState("9")
  const [difficulty,setdifficulty] = useState("easy")

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Homescreen setamount={setamount} setcategory={setcategory} setdifficulty={setdifficulty}/>} />
            <Route path='/fetch' element={<Fetch amount={amount} category={category} difficulty={difficulty} />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
