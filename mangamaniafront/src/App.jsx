import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Mangas from "./components/Mangas/Mangas";
import Login from "./components/Login/Login";
import Contacto from "./components/Contacto/Contacto";



const App = () => {
  return (
    
   <Router>
    <div className="App">
      <Header />
      

      <Switch>
        <Route path={"/home"} component={Home}></Route>
        <Route path={"/home"} component={Home}></Route>
        <Route path={"/mangas"} component={Mangas}></Route>
        <Route path={"/login"} component={Login}></Route>
        <Route path={"/contacto"} component={Contacto}></Route>
      </Switch>

      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
