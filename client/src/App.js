import React from 'react';
import './App.scss';
import Home from './components/home/home';
import {BrowserRouter, Route} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {Topic} from './components/case_studies/container/topic/topic';
import {About} from './components/about/about';
import CaseStudyContainer from './components/case_studies/container/case-study-container/case-study-container';

const routes = [
    { path: '/', name: 'home', Component: Home},
    { path: '/cs/:caseStudy', name: 'caseStudy', Child: CaseStudyContainer},
    { path: '/cs/:caseStudy/:topic', name: 'metachi', Child: Topic},
    { path: '/about', name: 'about', Component: About}
];

function App() {
    return (
        <BrowserRouter>
            <div>
                {routes.map(({ path, Component, Child }) =>
                    Child ?
                        <Route path={path} exact key={path} children={<Child/>}/> :
                        <Route key={path} exact path={path}>
                            {({match}) => (
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
