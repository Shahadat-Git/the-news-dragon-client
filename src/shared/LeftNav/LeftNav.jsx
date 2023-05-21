import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pic3 from '../../assets/3.png'
import { FaCalendar, FaCalendarAlt } from 'react-icons/fa';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-hazel-nine.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(e => console.log(e))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className=''>
                {
                    categories.map(category => <NavLink className={({ isActive }) => isActive ? 'd-block text-decoration-none text-black bg-light rounded py-3 ps-5' : 'd-block text-decoration-none text-secondary  py-3 ps-5'} to={`/category/${category.id}`} key={category.id}>{category.name}</NavLink>)
                }
            </div>
            <div className='my-3'>
                <div className=''>
                    <Card.Img variant="top" src={pic1} />
                    <Card.Body>
                        <Card.Title className='my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>

                        <div className='d-flex gap-3'>
                            <h6>Sports</h6>
                            <p className='text-secondary'><FaCalendarAlt></FaCalendarAlt> Jan 4, 2022</p>
                        </div>
                    </Card.Body>
                </div>

                <div className=''>
                    <Card.Img variant="top" src={pic2} />
                    <Card.Body>
                        <Card.Title className='my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        
                        <div className='d-flex gap-3'>
                            <h6>Sports</h6>
                            <p className='text-secondary'><FaCalendarAlt></FaCalendarAlt> Jan 4, 2022</p>
                        </div>
                    </Card.Body>
                </div>

                <div className=''>
                    <Card.Img variant="top" src={pic3} />
                    <Card.Body>
                        <Card.Title className='my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        
                        <div className='d-flex gap-3'>
                            <h6>Sports</h6>
                            <p className='text-secondary'><FaCalendarAlt></FaCalendarAlt> Jan 4, 2022</p>
                        </div>
                    </Card.Body>
                </div>


            </div>
        </div>
    );
};

export default LeftNav;