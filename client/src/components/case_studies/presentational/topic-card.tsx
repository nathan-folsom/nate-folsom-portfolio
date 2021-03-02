import React from "react";
import {Link} from "react-router-dom";

export interface TopicCardProps {
    title: string;
    url: string;
    subtitle: string;
}
export function TopicCard({title, url, subtitle}: TopicCardProps) {
    const render = () => (
        <div className="col-12 bg-light py-3 rounded-lg">
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <Link to={url}>View</Link>
        </div>
    )

    return render();
}