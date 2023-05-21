import React from 'react';
import bg from '../../assets/bg.png'

const RightNavBanner = () => {
    return (
        <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white mt-3 w-100 d-flex align-items-center" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px' }}>
            <div>
                <h3>
                    Create an Amazing Newspaper
                </h3>
                <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='btn btn-danger py-3 px-5'>Learn More</button>
            </div>
        </div>
    );
};

export default RightNavBanner;