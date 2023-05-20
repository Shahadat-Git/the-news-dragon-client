import React from 'react';
import { Card } from 'react-bootstrap';

const CategoryCard = ({ category }) => {
    const { _id, author, details, image_url, thumbnail_url, title, total_view } = category;
    return (
        <Card className="mb-3">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url}/>
                <Card.Text>
                    {details}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default CategoryCard;