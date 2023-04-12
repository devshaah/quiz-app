import "./HomeBody.css";
import { useNavigate } from "react-router-dom";

const HomeBody = ({ setamount, setcategory, setdifficulty }) => {
  const navigate = useNavigate();

  const handleamount = (event) => {
    setamount(event.target.value);
  };

  const handlecategory = (event) => {
    setcategory(event.target.value);
  };

  const handledifficulty = (event) => {
    setdifficulty(event.target.value);
  };

  return (
    <div className="box">
      <div className="contain">
        <div className="container">
          <h1>Welcome to Quiz App</h1>
          <h4>Select Your Preferences and get your Brain stormed</h4>

          <div className="cards">

            <div className="card">
              <h4>Choose Category:</h4>
              <select
                onChange={handlecategory}
                name="categ"
                id="categ"
                placeholder="No of Questions"
              >
                <option value="9">General Knowledge</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="32">Cartoon & Animations</option>
              </select>
            </div>

            <div className="card">
                <h4>No of Questions</h4>
              <select
                onChange={handleamount}
                name="question"
                id="question"
                placeholder="No of Questions"
              >
                <option value="5"> 5</option>
                <option value="10">10</option>
                <option value="15"> 15</option>
                <option value="20">20</option>
              </select>
            </div>

            <div className="card">
            <h4>Difficulty: </h4>
              <select
                onChange={handledifficulty}
                name="question"
                id="difficult"
                placeholder="No of Questions"
              >
                <option className="option" value="easy"> Easy</option>
                <option className="option" value="medium">Medium</option>
                <option className="option" value="hard"> Difficult</option>
              </select>
            </div>
          </div>
          <div>
            <button className="submit" onClick={() => navigate("/fetch")}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
