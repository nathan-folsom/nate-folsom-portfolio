import React, { ReactChild } from 'react';
import { Accordion, useAccordionToggle } from 'react-bootstrap';
import './case_studies.css';

const caseStudies = [{
        id: 0,
        title: "Metachi",
        technologies: "Angular, NgRx, TypeScript, HTML, CSS",
        position: "Front-end Developer",
        description: "As a front end developer, I help style components based on designs provided by the design team. I also create new components and hook them up to existing apis"
    },
    {
        id: 1,
        title: "Showposter",
        technologies: "React, JavaScript, HTML, CSS",
        position: "Front-end Developer, Designer",
        description: "I am designing and implementing a user interface for this software as a service web application."
    }];

function CustomToggle(props: {children: ReactChild[], eventKey: string}) {
    const decoratedOnClick = useAccordionToggle(props.eventKey, () => {}
    );

    return (
      <div
        className={"cs-show text-white"}
        onClick={decoratedOnClick}
      >
          {props.children}
      </div>
    );
}

function CaseStudyComponent(props: any) {
    const cs = caseStudies[props.id];
    return (
      <div className={"col-12 col-md-6 mt-4"}>
      <Accordion>
              <CustomToggle eventKey={props.id}>
                      <h2>{cs.title}</h2>
                      <p>{cs.position}</p>
                      <p>{cs.technologies}</p>
              </CustomToggle>
              <Accordion.Collapse eventKey={props.id}>
                  <div className="cs-hide text-white">
                      <p>{cs.description}</p>
                  </div>
              </Accordion.Collapse>
      </Accordion>
      </div>
    )
}

function CaseStudies() {
    return (
            <div id="case-studies" className="row" style={{flex: '1 1 auto'}}>
                {caseStudies.map((c) => <CaseStudyComponent key={c.id} id={c.id}/>)}
            </div>
        )
}
export default CaseStudies;