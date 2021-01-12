import React, { useContext, useEffect , lazy, Suspense} from 'react';
import './App.css';
import './stylesheets/Buttons.scss';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyContext } from '../src/utils/Context';
import { CartContext } from '../src/utils/CartContext';
import localStorage from './utils/localStorage';
import { useBeforeunload } from "react-beforeunload";

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//routes
const About = lazy(() => import("./routes/About"));
const Product = lazy(() => import("./routes/Product"));
const Checkout = lazy(() => import("./routes/Checkout"));
const Paid = lazy(() => import("./routes/Paid"));
const ShowAll = lazy(() => import("./routes/ShowAll"));
const Mens = lazy(() => import("./routes/Mens"));
const Womens = lazy(() => import("./routes/Womens"));
const Contact = lazy(() => import("./routes/Contact"));
const Login = lazy(() => import("./routes/Login"));
const Admin = lazy(() => import("./routes/Admin"));
const Home = lazy(() => import("./routes/Home"));
const CartPage = lazy(() => import("./routes/CartPage"));

const renderLoader = () => <p>Loading</p>;


function App() {

    const { menuOpenState, setMenuOpenState } = useContext(MyContext)
    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {
        document.body.onclick = function () {
            menuOpenState && setMenuOpenState(!menuOpenState);
        }
    }, [menuOpenState, setMenuOpenState]);

    useEffect(() => {
        if (cart) {
            let newCart = localStorage.getUserCart();
            setCart(newCart);
        }
    }, []);

    useBeforeunload((event) => event.preventDefault());

    return (
        <div className="App">
            <Router>
                <main className='App'>
                    <NavBar />
                    <Suspense fallback={<p>Loading</p>} >
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/Products/All">
                                <ShowAll path='all' activeSection='all' />
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
                            <Route exact path="/Cart">
                                <CartPage />
                            </Route>
                            <Route exact path="/Checkout">
                                <Checkout />
                            </Route>
                            <Route path="/Paid">
                                <Paid />
                            </Route>
                            <Route exact path="/About">
                                <About />
                            </Route>
                            <Route exact path="/Contact">
                                <Contact />
                            </Route>
                            <Route exact path="/Login">
                                <Login />
                            </Route>
                            <Route exact path="/Admin">
                                <Admin />
                            </Route>
                            <Route>
                                {/* Error page? */}
                            </Route>
                        </Switch>
                    </Suspense>
                    <Footer />
                </main>
            </Router>
        </div>
    );
}

export default App;