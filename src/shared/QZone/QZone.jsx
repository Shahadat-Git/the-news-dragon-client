import React from 'react';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-light rounded p-4 mt-3'>
            <h4>Q-Zone</h4>
            <img className='w-100' src={qZone1} alt="" />
            <img className='w-100' src={qZone2} alt="" />
            <img className='w-100' src={qZone3} alt="" />
        </div>
    );
};

export default QZone;