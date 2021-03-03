import React from "react";
import CaseStudyHeader from "./case_study_header/case_study_header";
import Footer from "../../commons/footer/footer";
import {TopicCard, TopicCardProps} from "./topic-card";

export interface CaseStudyProps {
    description: string;
    title: string;
    topics: TopicCardProps[];
    url: string;
}

export function CaseStudy({description, title, topics, url}: CaseStudyProps) {
    const render = () => (
        <div id={"case-study"} className="container-fluid d-flex flex-column px-2 px-md-5">
            <CaseStudyHeader title={title} prev="/"/>
            <div className="row mx-0 mt-3">
                <div className="col-12">
                    <p className="text-light">{description}</p>
                </div>
                <div className="col-12">
                    <h3 className="text-light">Code Samples</h3>
                </div>
                {topics.map(t => <TopicCard title={t.title} subtitle={t.subtitle} url={`/${url}/${t.url}`} key={t.title}/>)}
            </div>
            <div style={{flex: "1 1 auto"}}/>
            <Footer className="text-white px-3"/>
        </div>
    )

    return render();
}