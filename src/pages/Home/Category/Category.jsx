import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
    const categories = useLoaderData();
    console.log(categories)
    const { id } = useParams();
    return (
        <div>
            <h2>This Category News: {categories.length}</h2>
            {
                categories?.map(category => <CategoryCard
                    category={category}
                    key={category._id}
                ></CategoryCard>)
            }
        </div>
    );
};

export default Category;