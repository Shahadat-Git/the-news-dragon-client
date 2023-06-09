import React from 'react';
import editorsInsight1 from '../../../assets/editorsInsight1.png'
import editorsInsight2 from '../../../assets/editorsInsight2.png'
import editorsInsight3 from '../../../assets/editorsInsight3.png'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';

const EditorInsight = () => {
    return (
        <div className='my-3'>
            <h3 className='my-4 ms-2'>Editors Insight</h3>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <div className=''>
                            <Card.Img variant="top" src={editorsInsight1} />
                            <Card.Body>
                                <Card.Title className='my-3'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            
                                <p className='text-secondary'><FaCalendarAlt></FaCalendarAlt> Jan 4, 2022</p>
                            </Card.Body>
                        </div>
                        </Col>
                        <Col>
                        <div className=''>
                            <Card.Img variant="top" src={editorsInsight2} />
                            <Card.Body>
                                <Card.Title className='my-3'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                               
                                <p className='text-secondary'><FaCalendarAlt></FaCalendarAlt> Jan 4, 2022</p>
                            </Card.Body>
                        </div>
                        </Col>
                        <Col>
                        <div className=''>
                            <Card.Img variant="top" src={editorsInsight3} />
                            <Card.Body>
                                <Card.Title className='my-3'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                               
                                <p className='text-secondary'><FaCalendarAlt></FaCalendarAlt> Jan 4, 2022</p>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EditorInsight;