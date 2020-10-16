import React from "react";
import Footer from "../../commons/footer/footer";
import '../case_studies.css';
import CaseStudyHeader from "../case_study_header/case_study_header";

function Metachi() {
    return (
        <div id={"case-study"} className="d-flex flex-column px-5">
            <CaseStudyHeader title={"Metachi"}/>
            <div style={{flex: "1 1 auto"}}/>
            <Footer className="text-white"/>
        </div>

    )
}

export default Metachi;