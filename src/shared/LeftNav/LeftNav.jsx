import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
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
        </div>
    );
};

export default LeftNav;