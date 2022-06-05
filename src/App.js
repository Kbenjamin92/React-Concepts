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

     <FirstComponent 
       message={display}
     />
    </div>
  );
}

export default App;

const MyButton = (props) => {
  const useCustomButtonStyles = {
    backgroundColor: 'gold',
    color: 'black',
    border: '1px solid transparent',
    borderRadius: '5px',
    margin: '5px',
    transform: 'scale(2);'
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

  const FirstComponent = ({ message }) => {
    return (
      <>
        <p>{message}</p>
      </>
    );
  }