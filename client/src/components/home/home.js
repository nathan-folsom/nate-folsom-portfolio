import React, {Component} from 'react';
import Footer from '../commons/footer/footer';
import Header from '../commons/header/header';
import CaseStudyCards from './case_study_cards/case_study_cards.tsx';
import './home.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {bio: ''};
    }

    componentDidMount() {
        fetch(process.env.PUBLIC_URL + '/bio.txt')
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                this.setState((state) => state.bio = data);
            });
    }

    render() {
        return (
            <div id="body" className="row mx-0">
                <div id="left" className="col-12 col-md-5 px-0">
                </div>
                <div id="right" className="col-12 col-md-7 d-flex flex-column px-3 px-md-5">
                    <Header/>
                    <p id="bio" className={'pt-4'}>{this.state.bio}</p>
                    <Link to="/about">
                        <Button variant="outline-primary">More about me</Button>
                    </Link>
                    <h4 className="mt-3">Experience</h4>
                    <CaseStudyCards/>
                    <div style={{flex: '1 1 auto'}}/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Home;