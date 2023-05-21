import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
    const news = useLoaderData();
    // console.log(news)
    // const { id } = useParams();
    return (
        <div>
            <h2>This Category News: {news.length}</h2>
            {
                news?.map(singleNews => <CategoryCard
                    singleNews={singleNews}
                    key={singleNews._id}
                ></CategoryCard>)
            }
        </div>
    );
};

export default Category;