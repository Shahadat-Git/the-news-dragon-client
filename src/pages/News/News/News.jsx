import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from '../EditorsInsight/EditorInsight';

const News = () => {
    const currentNews = useLoaderData();
    const { _id, author, details, image_url, title, total_view, rating } = currentNews;
    // console.log(currentNews)
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Title className='my-3'>{title}</Card.Title>
                    <Card.Text className='text-secondary'>
                        {details}
                    </Card.Text>
                    <Button variant="danger"><Link
                        to='/' className='text-white text-decoration-none'><FaArrowLeft></FaArrowLeft> All news in this category</Link></Button>
                </Card.Body>
            </Card>
            <EditorInsight></EditorInsight></>
    );
};

export default News;