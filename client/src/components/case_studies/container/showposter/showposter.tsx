import React from "react";
import {Link} from "react-router-dom";
import Footer from "../../../commons/footer/footer";
import '../../presentational/case_studies.css';

function Showposter() {
    return (
        <div id={"case-study"}>
        <p className="text-white">Showposter</p>
        <Link to='/'>Back</Link>
            <Footer className="text-white"/>
        </div>
    )
}

export default Showposter;