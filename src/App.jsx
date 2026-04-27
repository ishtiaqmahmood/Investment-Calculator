import Header from "./components/Header.jsx";
import { useState } from "react";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      const updatedValue = newValue === "" ? "" : +newValue;
      return {
        ...prevUserInput,
        [inputIdentifier]: updatedValue,
      };
    });
  }

  const inputIsValid =
    userInput.duration >= 1 &&
    userInput.initialInvestment >= 0 &&
    userInput.annualInvestment >= 0 &&
    userInput.expectedReturn >= 0;

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter valid input values (duration &ge; 1, other values &ge; 0).</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
