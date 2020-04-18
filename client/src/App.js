import React from 'react';
import './App.scss';
import Home from './components/home/home';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Metachi from "./components/metachi/metachi";
import Showposter from "./components/showposter/showposter";

function App() {
  return (
    <BrowserRouter>
      {/*<Home/>*/}
      <Switch>
          <Route path="/metachi">
              <Metachi/>
          </Route>
          <Route path="/showposter">
              <Showposter/>
          </Route>
          <Route path="/">
              <Home/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
