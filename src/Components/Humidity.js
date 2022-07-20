import React from 'react';
import image9 from '../../src/assests/noze-picture/noze-pic-9.png'
const Humidity = () => {
    return (
        <div className='h-96 lg:h-full' style={{
            background: `url(${image9})`,
            borderRadius: '40%',

            backgroundSize: 'cover'
        }}>
            <div className='h-full'>
                <h2 className='text-center text-2xl lg:text-5xl pt-32 text-white '>Causes mold growth that
                    <br />
                    triggers asthma & irritates
                    <br />
                    our ears, nose and throat.</h2>
                <p className='text-xl lg:text-2xl mt-8 lg:mt-16 text-center text-white'>If humidity is too low, viruses can more easily survive and
                    <br />
                    be transmitted.
                </p>
            </div>
        </div>
    );
};

export default Humidity;