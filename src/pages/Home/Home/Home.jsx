import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <h3>Dragon News Home</h3>
            {
                news?.map(singleNews => <CategoryCard
                    singleNews={singleNews}
                    key={singleNews._id}
                ></CategoryCard>)
            }
        </div>
    );
};

export default Home;