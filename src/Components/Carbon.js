import React from 'react';
import image1 from '../../src/assests/noze-picture/noze-pic-1.png'

const Carbon = () => {
    return (
        <div className='h-96 lg:h-full' style={{
            background: `url(${image1})`,
            borderRadius: '40%',

            backgroundSize: 'cover'
        }}>
            <div className='h-full'>
                <h2 className='text-center text-2xl lg:text-5xl pt-32 text-white '>Clouds our thinking, lowers
                    <br />
                    productivity & affects our
                    <br />
                    sleep</h2>
                <p className='text-xl lg:text-2xl mt-8 lg:mt-16 text-center text-white'>Exhaled breath from people
                    <br />
                    & pets and open flames are the <br /> most common sources.</p>
            </div>
        </div>
    );
};

export default Carbon;