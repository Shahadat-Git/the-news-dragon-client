import React from 'react';
import Marquee from "react-fast-marquee";

const LatestHeadLine = () => {
    return (
        <div className='d-flex align-items-center bg-light my-3 p-3 rounded'>
            <button className='btn btn-danger'>Latest</button>
            <Marquee speed={100} className=' fw-semibold'>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default LatestHeadLine;