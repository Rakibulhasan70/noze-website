import React from 'react';
import image7 from '../../src/assests/noze-picture/noze-pic-7.png'
const Ethanol = () => {
    return (
        <div className='h-96 lg:h-full' style={{
            background: `url(${image7})`,
            borderRadius: '40%',

            backgroundSize: 'cover'
        }}>
            <div className='h-full'>
                <h2 className='text-center text-2xl lg:text-5xl pt-32 text-white '>Causes headaches,
                    <br />
                    nausea & irritates our
                    <br />
                    lungs.</h2>
                <p className='text-xl lg:text-2xl mt-8 lg:mt-16 text-center text-white'>Cleaning detergents & hand sanitizers are the most
                    <br />
                    common sources.
                </p>
            </div>
        </div>
    );
};

export default Ethanol;