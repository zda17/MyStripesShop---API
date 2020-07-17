import React, { Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//components
import AText from "./components/AText";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//routes
import About from "./routes/About";
import Product from "./routes/Product";
import Cart from "./routes/Cart";
import ShowAll from "./routes/ShowAll";
import Contact from "./routes/Contact";
import Home from "./routes/Home";


function App() {
  return (
    <>
    <NavBar />
    <Router>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Product">
        <Product />
      </Route>
      <Route exact path="/Cart">
        <Cart />
      </Route>
      <Route exact path="/ShowAll">
        <ShowAll />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      <Route>
        {/* Error page? */}
      </Route>
    </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
