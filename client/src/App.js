import React, { useContext, useEffect } from 'react';
import './App.css';
import './stylesheets/Buttons.scss';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyContext } from '../src/utils/Context';


//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//routes
import About from "./routes/About";
import Product from "./routes/Product";
import Checkout from "./routes/Checkout";
import ShowAll from "./routes/ShowAll";
import Mens from "./routes/Mens";
import Womens from "./routes/Womens";
import Contact from "./routes/Contact";
import Home from "./routes/Home";


function App() {

  const { menuOpenState, setMenuOpenState } = useContext(MyContext)

  useEffect(() => {
    document.body.onclick = function () {
      menuOpenState && setMenuOpenState(!menuOpenState);
    }
  }, [menuOpenState, setMenuOpenState]);


  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Products/All">
            <ShowAll />
          </Route>
          <Route exact path="/Products/Mens">
            <Mens />
          </Route>
          <Route exact path="/Products/Womens">
            <Womens />
          </Route>
          <Route exact path="/Products/:base_sku"
            render={(props) => <Product {...props} />}
          >
          </Route>
          <Route exact path="/Checkout">
            <Checkout />
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
        <Footer />
      </>
    </Router>
  );
}

export default App;