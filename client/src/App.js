import React from 'react';
import './App.scss';
import Home from './components/home/home';
import {BrowserRouter, Route} from "react-router-dom";
import Metachi from "./components/case_studies/container/metachi/metachi";
import Showposter from "./components/case_studies/container/showposter/showposter";
import {CSSTransition} from "react-transition-group";
import {Topic} from './components/case_studies/container/topic/topic';

const routes = [
    { path: '/', name: 'home', Component: Home},
    { path: '/metachi', name: 'metachi', Component: Metachi},
    { path: '/metachi/:topic', name: 'metachi', Child: Topic},
    { path: '/showposter', name: 'showposter', Component: Showposter},
];

function App() {
    return (
        <BrowserRouter>
            <div>
                {routes.map(({ path, Component, Child }) =>
                    Child ?
                    <Route path={path} key={path} children={<Child />} /> :
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
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
