import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  
  const title = 'Jockes hemsida'
  const text = 'hejsan'

  return (
    <>
    <Navbar pageTitle={title} prop1='1' prop2='2' />
      <div className="App"  >
      {text}
      </div>
      <div></div>
    </>
  );
}

export default App;
