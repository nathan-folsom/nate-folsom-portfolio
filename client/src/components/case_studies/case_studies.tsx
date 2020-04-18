import React, {ReactChild} from 'react';
import {Accordion, useAccordionToggle} from 'react-bootstrap';
import './case_studies.css';
import {Link} from "react-router-dom";

const caseStudies = [
    {
        id: 0,
        title: "Metachi",
        url: "/metachi",
        technologies: "Angular, NgRx, TypeScript, HTML, CSS",
        position: "Front-end Developer",
        description: "As a front end developer, I help style components based on designs provided by the design team. I also create new components and hook them up to existing apis"
    },
    {
        id: 1,
        title: "Showposter",
        url: "/showposter",
        technologies: "React, JavaScript, HTML, CSS",
        position: "Front-end Developer, Designer",
        description: "I am designing and implementing a user interface for this software as a service web application."
    }
];

function CustomToggle(props: { children: ReactChild[], eventKey: string }) {
    const decoratedOnClick = useAccordionToggle(props.eventKey, () => {
    });

    return (
        <div
            className={"cs-show text-white"}
            onClick={decoratedOnClick}
            style={{height: "150px"}}
        >
            {props.children}
        </div>
    );
}

function CaseStudyComponent(props: any) {
    const cs = caseStudies[props.id];
    return (
        <div className={"col-12 col-xl-6 mt-4"}>
            <CustomToggle eventKey={props.id}>
                <h2>{cs.title}</h2>
                <p>{cs.position}</p>
                <p>{cs.technologies}</p>
            </CustomToggle>
            <Accordion.Collapse eventKey={props.id}>
                <div className="cs-hide text-white">
                    <p>{cs.description}</p>
                    <Link to={cs.url}>Show me some code!</Link>
                </div>
            </Accordion.Collapse>
        </div>
    )
}

function CaseStudies() {
    return (
        <Accordion>
            <div id="case-studies" className="row" style={{flex: '0 1 auto'}}>
                {caseStudies.map((c) => <CaseStudyComponent key={c.id} id={c.id}/>)}
            </div>
        </Accordion>

    )
}

export default CaseStudies;