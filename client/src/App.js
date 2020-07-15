import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import AText from "./components/AText";

function App() {
  return (
    <Fragment>
      <div className="container">
        <AText /> {/*animated text*/}
      </div>
    </Fragment>
  );
}

export default App;
