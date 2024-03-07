import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initInvest: 0,
    annualInvest: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const isValueValid = userInput.duration >= 1;

  function updateCalc(identifier, value) {
    setUserInput((userInput) => {
      return { ...userInput, [identifier]: +value };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={updateCalc} />
      {!isValueValid && (
        <p className='center'>Please enter duration greater than 0!</p>
      )}
      {isValueValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
