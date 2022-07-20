import React from 'react';
import image3 from '../../src/assests/noze-picture/noze-pic-3.png'

const Formaldehyde = () => {
    return (
        <div className='h-96 lg:h-full' style={{
            background: `url(${image3})`,
            borderRadius: '40%',

            backgroundSize: 'cover'
        }}>
            <div className='h-full'>
                <h2 className='text-center text-2xl lg:text-5xl pt-32 text-white '>Irritates the eyes, nose,
                    <br />
                    throat & skin - and is often
                    <br />
                    linked to cancer.</h2>
                <p className='text-xl lg:text-2xl mt-8 lg:mt-16 text-center text-white'>Pressed wood products like easy-to-assemble furniture
                    <br />
                    are the most common sources.
                </p>
            </div>
        </div>
    );
};

export default Formaldehyde;