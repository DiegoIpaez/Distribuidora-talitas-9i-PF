import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Carrito from "../pages/Carrito";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import ProductScreen from "../pages/ProductScreen";
import User from "../pages/User";
import ProtectedRoutes from "../helpers/ProtectedRoutes";
import BusquedaTest from "../pages/BusquedaTest";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={BusquedaTest} />
        <Route exact path="/contact" component={Contact} />
        <ProtectedRoutes exact path="/product/:id" component={ProductScreen} />
        <ProtectedRoutes exact path="/carrito" component={Carrito} />
        <ProtectedRoutes exact path="/admin" component={Admin} />
        <ProtectedRoutes exact path="/user" component={User} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
