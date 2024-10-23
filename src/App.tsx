import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './patterns/splitPattern/split-screen';

const LeftSide = () => {
   return (
    <>
    <h2 style={{backgroundColor:"red"}}>Hello left</h2>
    </>
   )
}


const RightSide = () => {
  return (
   <>
   <h2 style={{backgroundColor:"green"}}>Hello Right</h2>
   </>
  )
}
function App() {
  return (
    <div className="App">
     <SplitScreen Left={LeftSide} Right={RightSide}/>
    </div>
  );
}

export default App;
