import React from "react";
import {Card} from "react-bootstrap";

export interface TopicCardProps {
    title: string;
    url: string;
    subtitle: string;
}

export function TopicCard({title, url, subtitle}: TopicCardProps) {
    const render = () => (
        <div className="col-12 mt-3">
            <Card bg="light">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                    <Card.Link href={url}>View</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )

    return render();
}