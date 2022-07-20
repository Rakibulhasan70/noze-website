import React from 'react';
import image4 from '../../src/assests/noze-picture/noze-pic-4.png'

const Nitrogen = () => {
    return (
        <div className='h-96 lg:h-full' style={{
            background: `url(${image4})`,
            borderRadius: '40%',

            backgroundSize: 'cover'
        }}>
            <div className='h-full'>
                <h2 className='text-center text-2xl lg:text-5xl pt-32 text-white '>Causes permanent
                    <br />
                    damage to our respiratory
                    <br />
                    system..</h2>
                <p className='text-xl lg:text-2xl mt-8 lg:mt-16 text-center text-white'>Wood fireplaces & fuel powered appliances are the most
                    <br />
                    common sources.
                </p>
            </div>
        </div>
    );
};

export default Nitrogen;