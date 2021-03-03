import React, {useEffect, useState} from "react";
import '../../presentational/case_studies.css';
import {CaseStudy} from "../../presentational/case-study";

function Metachi() {
    const [data, setData] = useState({title: '', description: '', topics: []});
    useEffect(() => {
        fetch('/case_study_content/metachi/metachi.json')
            .then(r => {
                return r.json();
            })
            .then(t => {
                setData({title: t.title, description: t.description, topics: t.topics});
            });
    }, []);

    return <CaseStudy title={data.title} description={data.description} topics={data.topics} url="metachi"/>
}

export default Metachi;