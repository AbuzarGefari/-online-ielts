import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Teacher from './components/Footer/Teacher/Teacher';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
   <div className="full-body">
      <Router>
       <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
        <Home></Home>
          </Route>

          <Route path="/home">
         <Home></Home>
          </Route>

          <Route path="/about">
          <About></About>
          </Route>

          <Route path="/services">
           <Services></Services>
          </Route>

          <Route Route exact path = "/teacher" >
          <Teacher></Teacher>
          </Route>

          <Route path="*">
           <NotFound></NotFound>
          </Route>
        </Switch>
     <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
