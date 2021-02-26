import React, {useEffect, useState} from "react";
import Footer from "../../commons/footer/footer";
import '../case_studies.css';
import CaseStudyHeader from "../case_study_header/case_study_header";
import {Tab, Tabs} from "react-bootstrap";
import {textToHtml} from "../../../utils";

function Metachi() {
    const [text, setText] = useState({service: {__html: ''}, class: {__html: ''}, usage: {__html: ''}});
    useEffect(() => {
        fetch('./case_study_content/metachi.json')
            .then(r => {
                return r.json();
            })
            .then(t => {
                setText({class: {__html: textToHtml(t.class)}, service: {__html: textToHtml(t.service)}, usage: {__html: textToHtml(t.usage)}});
            });
    }, []);

    return (
        <div id={"case-study"} className="container-fluid d-flex flex-column px-2 px-md-5">
            <CaseStudyHeader title={"Metachi"}/>
            <div className="row mx-0 mt-3">
                <div className="col-12 col-md-6">
                    <p className="text-light">Metachi is a SaaS project management and data analytics web
                        application. Being a part of a startup environment that is bringing the future of remote
                        work is an exciting opportunity. My work focuses on building a robust, cross-browser, mobile
                        friendly application with concise data visualization and an optimized user experience.</p>
                </div>
                <div className="col-12 col-md-6">
                    <p className="text-light">Front end work includes writing and testing Angular components in
                        TypeScript, in addition to writing HTML and CSS. I do anything from small bugfixes to building
                        entire features. Backend work is more limited, usually bugfixing or writing and testing an
                        endpoint.</p>
                </div>
                <div className="col-12 mt-3">
                    <h5 className="text-light">Code Sample: Page Display State Service</h5>
                    <p className="text-light mt-3">During the process of building a new feature, I realized that I
                        needed
                        a more well tailored approach to parsing the url and using that to drive the appearance of
                        the page. In order to do this, I created an Angular service that would use a set of callback
                        functions to perform some side effects and return an object representing the page state. The
                        service pipes an observable originating from the router service through the callback
                        functions before returning it for the component to subscribe to.</p>
                </div>
                <div className="col-12 mt-3">
                    <Tabs id="page-display-service-tabs" defaultActiveKey="service">
                        <Tab title="Service" eventKey="service">
                            <p className="text-light mt-3">The Angular service itself only handles getting the
                                application's
                                url, which it parses before handing off to a new instance of the UrlHandler class, along
                                with callbacks provided by the component that is using the service. By having the
                                Angular service only deal with parsing the url and interfacing with Angular components,
                                it would be very easy to extract the functionality provided to a non-Angular
                                setting.</p>
                            <p className="text-light bg-dark p-2 rounded-lg overflow-x-scroll text-nowrap"
                               dangerouslySetInnerHTML={text.service}/>
                        </Tab>
                        <Tab title="UrlHandler" eventKey="urlhandler">
                            <p className="text-light mt-3">This class is the workhorse of the service. It provides all
                                of the url matching functionality, and will call callback functions whose return values
                                are then emitted through the state observable. There are also callback functions which
                                do not return anything, stateless effects, that are called every time the url changes.
                                If no match is found, the default state will be emitted. The class returns the value of
                                the first matching stateful callback that is found, so wildcard matchers are handled
                                last.</p>
                            <p className="text-light bg-dark p-2 rounded-lg overflow-x-scroll text-nowrap"
                               dangerouslySetInnerHTML={text.class}/>
                        </Tab>
                        <Tab title="Usage" eventKey="usage">
                            <p className="text-light mt-3">By tying the page state to a standardized object, it becomes
                                much easier to conditionally render html or other subcomponents, especially as a feature
                                becomes more complex. The implications for improving user experience are great, as
                                users can navigate easily within components by using the built in back/forward
                                functionality of the browser. This is especially relevant for mobile users who are used
                                to swiping back
                                and forth to navigate web pages.</p>
                            <p className="text-light bg-dark p-2 rounded-lg overflow-x-scroll text-nowrap"
                               dangerouslySetInnerHTML={text.usage}/>
                        </Tab>
                        {/*<Tab title="Test" eventKey="test">*/}
                        {/*    <p className="text-light">Unit testing for service</p>*/}
                        {/*</Tab>*/}
                    </Tabs>
                </div>
            </div>
            <div style={{flex: "1 1 auto"}}/>
            <Footer className="text-white px-3"/>
        </div>

    )
}

export default Metachi;