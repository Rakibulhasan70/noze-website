import React from 'react';
import image5 from '../../src/assests/noze-picture/noze-pic-5.png'
const Butanal = () => {
    return (
        <div className='h-96 lg:h-full' style={{
            background: `url(${image5})`,
            borderRadius: '40%',

            backgroundSize: 'cover'
        }}>
            <div className='h-full'>
                <h2 className='text-center text-2xl lg:text-5xl pt-32 text-white '>Irritates our lungs causing
                    <br />
                    coughing and shortness of
                    <br />
                    breath.</h2>
                <p className='text-xl lg:text-2xl mt-8 lg:mt-16 text-center text-white'>Garbage, scented candles & cigarette smoke are the
                    <br />
                    most common sources.
                </p>
            </div>
        </div>
    );
};

export default Butanal;