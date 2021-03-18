import React from 'react';
import './App.scss';
import Home from './components/home/home';
import {BrowserRouter, Route} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {Topic} from './components/case_studies/container/topic/topic';
import {About} from './components/about/about';
import CaseStudyContainer from './components/case_studies/container/case-study-container/case-study-container';

const routes = [
    {path: '/', name: 'home', Component: Home, transitionDuration: 400},
    {path: '/cs/:caseStudy', name: 'caseStudy', Component: CaseStudyContainer},
    {path: '/cs/:caseStudy/:topic', name: 'metachi', Component: Topic},
    {path: '/about', name: 'about', Component: About}
];

function App() {
    return (
        <BrowserRouter>
            {routes.map(({path, Component, transitionDuration}) =>
                <Route key={path} exact path={path}>
                    {({match}) => (
                        <CSSTransition
                            in={match != null}
                            timeout={transitionDuration || 200}
                            unmountOnExit
                        >
                            <Component/>
                        </CSSTransition>
                    )}
                </Route>
            )}
        </BrowserRouter>
    );
}

export default App;
