import React from 'react';
import {Card} from 'react-bootstrap';
import './case_study_cards.css';

const caseStudies = [
    {
        id: 0,
        title: "Metachi",
        url: "/metachi",
        technologies: "Angular, NgRx, TypeScript, HTML, CSS, Java, Spring",
        position: "Full Stack Developer",
        description: "Although my focus is primarily on front-end, I contribute to the whole stack of the web application. I do everything from small bug fixes to implementing new features and APIs."
    }
];

function CaseStudyCard(props: any) {
    const cs = caseStudies[props.id];
    return (
        <Card className="col-12 cs-card">
            <Card.Body>
                <Card.Title>{cs.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{cs.position}</Card.Subtitle>
                <Card.Text>{cs.technologies}</Card.Text>
                <Card.Link href={cs.url}>Show me some code!</Card.Link>
            </Card.Body>
        </Card>
    )
}

function CaseStudyCards() {
    return (
        <div id="case-studies" className="row no-gutters" style={{flex: '0 1 auto'}}>
            {caseStudies.map((c) => <CaseStudyCard key={c.id} id={c.id}/>)}
        </div>
    )
}

export default CaseStudyCards;