import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nomatch from './Components/Nomatch/Nomatch';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/home">
        <Home></Home>
          </Route>
          <Route path="/countryDetails/:name">
            <CountryDetails></CountryDetails>
          </Route>
         
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Nomatch></Nomatch>

          </Route>
        </Switch>
      </Router>

   
    </div>
  );
}

export default App;
