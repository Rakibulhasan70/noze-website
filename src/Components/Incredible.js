import React from 'react';
import image1 from '../../src/assests/Noze-11.png'
import image2 from '../../src/assests/NOZE-Hero-3.png'
import image3 from '../../src/assests/NOZE-Hero-4.png'

const Incredible = () => {
    return (
        <div className='container mx-auto my-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
                <div >
                    <h2 className='text-6xl font-semibold text-center lg:text-start'>Incredible
                        <br />
                        power, right <br />
                        under your <br />
                        NOZE</h2>
                </div>
                <div>
                    <div className='flex flex-col gap-y-12 justify-center items-center mt-16'>
                        <img
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            className='w-1/2 h-60 lg:h-96 bg-secondary my-0 ml-0 lg:mr-64' style={{ borderRadius: '1000px' }} src={image1} alt="" />
                        <div>
                            <p className='text-center font-bold text-xl ml-0 lg:mr-96'>Check in.</p>
                            <p>Keep an eye on things in real-
                                <br />
                                time so you can have peace of
                                <br />
                                mind all the time.</p>
                        </div>
                        <img
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            className='w-1/2 h-60 lg:h-96 bg-secondary ml-0 lg:ml-64 my-0' style={{ borderRadius: '1000px' }} src={image2} alt="" />
                        <div className='ml-0 lg:ml-72'>
                            <p className=' font-bold text-xl '>Check in.</p>
                            <p>Keep an eye on things in real-
                                <br />
                                time so you can have peace of
                                <br />
                                mind all the time.</p>
                        </div>
                        <img
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            className='w-1/2 h-60 lg:h-96 bg-secondary my-0 ml-0 lg:mr-64' style={{ borderRadius: '1000px' }} src={image3} alt="" />
                        <div>
                            <p className='text-center font-bold text-xl ml-0 lg:mr-96'>Check in.</p>
                            <p>Keep an eye on things in real-
                                <br />
                                time so you can have peace of
                                <br />
                                mind all the time.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Incredible;