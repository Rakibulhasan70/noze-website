import React from 'react';
import wondaringImage from '../../src/assests/NOZE-Hero-6 .png'

const Wondering = () => {
    return (
        <div data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000">
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 my-24'>
                <div>
                    <img style={{ borderRadius: '50%' }} className=' mt-16 h-full w-5/6 px-8 ml-12  lg:w-3/4' src={wondaringImage} alt="" />
                </div>
                <div className=' px-16'>
                    <h1 className=' text-6xl font-semibold my-16'>Wondering if
                        <br />
                        you should
                        <br />
                        get a NOZE?</h1>
                    <p className='conqure-info'>NOZE monitors the air for spores and other markers associated with the most common types of indoor mold. Our mold index will tell you if it's likely that there's mold around and whether your space is in danger of being a breeding ground.</p>
                </div>
            </div>
        </div>
    );
};

export default Wondering;