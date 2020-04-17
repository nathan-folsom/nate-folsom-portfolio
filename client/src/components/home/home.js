import React, {useEffect, useState} from "react";
import Footer from "../commons/footer/footer";
import LoadEffect from "../commons/load_effect/load_effect.tsx";
import Header from "../commons/header/header";
import CaseStudies from "../case_studies/case_studies.tsx";

function Home(){
    const [ bio, setbio ] = useState('');
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/bio.txt')
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                setbio(data);
            });
    }, []);

    return (
        <LoadEffect>
            <div id="body" className="row mx-0">
                <div id="left" className="col-12 col-md-5 px-0">
                </div>
                <div id="right" className="col-12 col-md-7 d-flex flex-column px-5" >
                    <Header/>
                    <p id="bio" className={"pt-4"}>{bio}</p>
                    <CaseStudies/>
                    <div style={{flex: '1 1 auto'}}/>
                    <Footer/>
                </div>
            </div>
        </LoadEffect>
    )
}

export default Home;