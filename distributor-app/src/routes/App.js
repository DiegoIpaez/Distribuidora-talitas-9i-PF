import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductScreen from "../pages/ProductScreen";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
