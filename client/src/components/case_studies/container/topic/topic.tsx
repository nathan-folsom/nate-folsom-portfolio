import CaseStudyHeader from "../../presentational/case_study_header/case_study_header";
import Footer from "../../../commons/footer/footer";
import React, {useEffect, useState} from "react";
import {TabPane, Tabs} from "react-bootstrap";
import { useParams, useRouteMatch } from "react-router-dom";
import {formatCode} from "../../../../utils";

export function Topic() {
    let {topic} = useParams();
    let {url} = useRouteMatch();
    const initialState: {title: string, description: string, tabs: {title: string, description: string, code: {__html: string}}[]} = {
        title: '',
        description: '',
        tabs: []
    }
    let [data, setData] = useState(initialState);

    useEffect(() => {
        fetch(`/case_study_content/${getUrl(url)}/topics/${topic}.json`)
            .then(r => r.json())
            .then(r => {
                setData({title: r.title, description: r.description, tabs: r.tabs.map(formatTab)});
            })
    }, [topic, url]);

    const render = () => (
        <div className="container-fluid d-flex flex-column px-2 px-md-5">
            <CaseStudyHeader title={data.title} prev="./"/>
            <div className="row mx-0 mt-3">
                <div className="col-12">
                    <p className="text-light">{data.description}</p>
                </div>
                <div className="col-12 mt-3">
                    {data.tabs.length && <Tabs id="page-display-service-tabs" defaultActiveKey={data.tabs[0].title}>
                        {data.tabs.map(t => <TabPane title={t.title} key={t.title} eventKey={t.title}>
                            <p className="text-light mt-3">
                                {t.description}
                            </p>
                            <p className="text-light bg-dark p-2 rounded-lg overflow-x-scroll text-nowrap"
                               dangerouslySetInnerHTML={t.code}/>
                        </TabPane>)}
                    </Tabs>}
                </div>
            </div>
            <div style={{flex: "1 1 auto"}}/>
            <Footer className="text-white px-3"/>
        </div>
    )

    const getUrl = (url: string) => url.split('/')[1];

    const formatTab = (tab: {title: string, description: string, code: string}) => ({
        title: tab.title, description: tab.description, code: formatCode(tab.code)
    })


    return render();
}