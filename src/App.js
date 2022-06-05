import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('');

  return (
    <div className="App">
    
      <MyButton onClick={() => setDisplay('Hello React!')}>
        <p>Display Text</p>
      </MyButton>
      <br/>      
      <MyButton onClick={() => setDisplay('')}>
        <p>Remove Text</p>
      </MyButton>

      <p>{display}</p>
    </div>
  );
}

export default App;

// reusable custom button component
const MyButton = (props) => {
  const useCustomButtonStyles = {
    backgroundColor: 'gold',
    color: 'black',
    border: '1px solid transparent',
    borderRadius: '5px',
    margin: '5px',
  }
  return (
    <>
      <button 
      style={useCustomButtonStyles}
      onClick={props.onClick}
      >
      {props.children}
      </button>
    </>
  )};

  