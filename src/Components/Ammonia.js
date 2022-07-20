import React from 'react';
import image2 from '../../src/assests/noze-picture/noze-pic-2.png'

const Ammonia = () => {
    return (
        <div className='h-96 lg:h-full' style={{
            background: `url(${image2})`,
            borderRadius: '40%',

            backgroundSize: 'cover'
        }}>
            <div className='h-full'>
                <h2 className='text-center text-2xl lg:text-5xl pt-32 text-white '>Irritates our noses and
                    <br />
                    throats, amplifies allergies
                    <br />
                    & triggers asthma.</h2>
                <p className='text-xl lg:text-2xl mt-8 lg:mt-16 text-center text-white'>Cleaning products are the most common sources.</p>
            </div>
        </div>
    );
};

export default Ammonia;