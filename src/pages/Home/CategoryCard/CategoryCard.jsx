import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const CategoryCard = ({ singleNews }) => {
    const { _id, author, details, image_url, title, total_view, rating } = singleNews;
    return (
        <Card className="mb-3">
            <Card.Header className='d-flex align-items-center'>
                <img style={{ width: '40px', borderRadius: '50%' }} src={author.img} alt="" />
                <div className='flex-grow-1 ms-3'>
                    <h6 className='m-0'>{author.name}</h6>
                    <p className='m-0'>{moment(author.published_date).format('yyyy-MM-DD')}</p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt className='ms-2'></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 350 && details.slice(0, 350)}... <Link to={`/news/${_id}`} className='text-warning fw-bold text-decoration-none'>Read More</Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <Rating className='text-warning'
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        readonly
                    />
                    <span className='ms-2'>{rating.number}</span>
                </div>
                <div>
                    <FaEye></FaEye>
                    <span className='ms-2'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CategoryCard;