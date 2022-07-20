import React from 'react';
import image8 from '../../src/assests/noze-picture/noze-pic-8.png'
const Tobacco = () => {
    return (
        <div className='h-96 lg:h-full' style={{
            background: `url(${image8})`,
            borderRadius: '40%',

            backgroundSize: 'cover'
        }}>
            <div className='h-full'>
                <h2 className='text-center text-2xl lg:text-5xl pt-32 text-white '>Seeps into furniture and
                    <br />
                    can linger in a space for a
                    <br />
                    long time.</h2>
                <p className='text-xl lg:text-2xl mt-8 lg:mt-16 text-center text-white'>If smoking is not allowed in your space, keep an eye
                    <br />
                    behind closed doors.
                </p>
            </div>
        </div>
    );
};

export default Tobacco;