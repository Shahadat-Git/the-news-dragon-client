import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className='ms-3'>
                {
                    categories.map(category => <Link className='d-block text-decoration-none text-black mb-2' to={`/category/${category.id}`} key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftNav;