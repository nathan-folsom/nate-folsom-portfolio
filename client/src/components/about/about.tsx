import React from "react";
import CaseStudyHeader from "../case_studies/presentational/case_study_header/case_study_header";
import Footer from "../commons/footer/footer";
import {Card} from "react-bootstrap";

export function About() {
    return (
        <div className="container full-height d-flex flex-column px-2 px-md-5">
            <CaseStudyHeader title="About Me"/>
            <div className="row mx-0 mt-3">
                <div className="col-12">
                    <Card border="light" bg="dark" text="light">
                        <Card.Body>
                            <Card.Title>History</Card.Title>
                            <Card.Text>I found my way into tech when I completed a UX design bootcamp in spring of 2019,
                                however I soon after discovered that writing code was more up my alley. Making my first
                                design portfolio with plain HTML and CSS led me to learning JavaScript and eventually
                                taking the whole coding thing more seriously. After around 7 months of self-motivated
                                front end study, I had the opportunity to start working on Metachi in January of 2020.
                                Gaining access to the codebase for a full blown web application kicked my learning into
                                high gear as I got to work on the object-oriented TypeScript frontend and Java backend.
                                Having access to such a mature project has helped me move past the basics and into more
                                advanced topics like software architecture and DevOps.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 mt-3">
                    <Card bg="light">
                        <Card.Body>
                            <Card.Title>Philosophy</Card.Title>
                            <Card.Text>When thinking about code, I find that there are two main avenues which occupy my
                                train of thought: The role of code in my life, and the role of code in society. As far
                                as my own personal pursuits go, I think things are fairly simple. Writing software is
                                something that can be challenging, frustrating, and tedious; but at the end of the day
                                it is my craft. Overcoming challenges, coping with short term frustration, and
                                discovering new methods to reduce tedium are the learning moments that make everything
                                worth it. Additionally, building relationships around shared interests and passions is a
                                powerful and necessary part of my life. Coding provides an endless source of personal
                                growth, learning, and opportunity.<br/><br/>So what about society then? I think I’ve
                                boiled things down to a nice sentence: Technology is equally capable of lifting people
                                up as it is at lifting stock prices. This is not to say that Big Tech or making money is
                                inherently bad, but rather that we have the opportunity to solve a host of new and
                                exciting problems to effect positive change in the world. Of course businesses need to
                                generate revenue in order to function, but the tech companies of the future are those
                                that will allow people to live healthier, happier, and more sustainable lifestyles while
                                doing it.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div style={{flex: "1 1 auto"}}/>
            <Footer className="text-white px-3"/>
        </div>
    )
}