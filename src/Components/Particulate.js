import React from 'react';
import image6 from '../../src/assests/noze-picture/noze-pic-6.png'
const Particulate = () => {
    return (
        <div className='h-96 lg:h-full' style={{
            background: `url(${image6})`,
            borderRadius: '40%',

            backgroundSize: 'cover'
        }}>
            <div className='h-full'>
                <h2 className='text-center text-2xl lg:text-5xl pt-32 text-white '>Irritates our lungs,
                    <br />
                    aggravates allergies & can
                    <br />
                    increase virus spread.</h2>
                <p className='text-xl lg:text-2xl mt-8 lg:mt-16 text-center text-white'>Cooking, cleaning & particles coming from the outdoors
                    <br />
                    are the most common sources.
                </p>
            </div>
        </div>
    );
};

export default Particulate;