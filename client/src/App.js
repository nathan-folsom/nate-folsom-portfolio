import React from 'react';
import './App.scss';
import Home from './components/home/home';
import {BrowserRouter, Route} from "react-router-dom";
import Metachi from "./components/case_studies/metachi/metachi";
import Showposter from "./components/case_studies/showposter/showposter";
import {CSSTransition} from "react-transition-group";

const routes = [
    { path: '/', name: 'home', Component: Home},
    { path: '/metachi', name: 'metachi', Component: Metachi},
    { path: '/showposter', name: 'showposter', Component: Showposter},
];

function App() {
    return (
        <BrowserRouter>
            <div>
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        {({ match }) => (
                            <CSSTransition
                                in={match != null}
                                timeout={400}
                                classnames="page"
                                unmountOnExit
                                >
                                <Component/>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </div>
        </BrowserRouter>
    );
}

export default App;
