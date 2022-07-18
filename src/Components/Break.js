import React from 'react';
import blackVedio from '../../src/assests/NOZEabout2.mp4'
const Break = () => {
    return (
        <div>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 my-24'>
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >

                    <h1 className='conqurw-tittle'>Break the Mold</h1>
                    <p className='conqure-info'>NOZE monitors the air for spores and other markers associated with the most common types of indoor mold. Our mold index will tell you if it's likely that there's mold around and whether your space is in danger of being a breeding ground.</p>
                </div>
                <div>
                    <video autoplay src={blackVedio} autoPlay controlsList='nodownload' loop muted="muted"></video>
                </div>
            </div>
        </div>
    );
};

export default Break;