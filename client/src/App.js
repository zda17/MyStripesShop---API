import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import AText from "./components/AText";

function App() {
  return (
      <div className="container">
        <AText /> {/*animated text*/}
      </div>
  );
}

export default App;
