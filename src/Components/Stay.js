import React from 'react';

const Stay = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className='container mx-auto my-16'>
            <h2 className='text-center'>Stay connected with NOZE</h2>
            <p className='conqure-info text-center mt-10'>NOZE is an AI powered air quality monitor that
                <br />
                works to keep you safe. Breathe easy.</p>

            <div className='flex justify-center items-center mt-10'>
                <button className='button'>Join the waitlist</button>
            </div>
        </div>
    );
};

export default Stay;