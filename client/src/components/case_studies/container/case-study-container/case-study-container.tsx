import React, {useEffect, useState} from "react";
import '../../presentational/case_studies.css';
import {CaseStudy} from "../../presentational/case-study";
import {useParams} from "react-router-dom";

function CaseStudyContainer() {
    const [data, setData] = useState({title: '', description: '', topics: []});
    let {caseStudy} = useParams();
    useEffect(() => {
        fetch(`/case_study_content/${caseStudy}/${caseStudy}.json`)
            .then(r => {
                return r.json();
            })
            .then(t => {
                setData({title: t.title, description: t.description, topics: t.topics});
            });
    }, [caseStudy]);

    return <CaseStudy title={data.title} description={data.description} topics={data.topics} url={caseStudy || ''}/>
}

export default CaseStudyContainer;