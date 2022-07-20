import React from 'react';
import FirstJs from './FirstJs';
import Headlines from './Headlines';
import { Link, Outlet } from 'react-router-dom';
import Conqure from './Conqure';
import Break from './Break.js';
import Vedios from './Vedios';
import Wondering from './Wondering';
import HomeFaqs from './HomeFaqs';
import Stay from './Stay';
import Incredible from './Incredible';
import Nested from './Nested';

const Overview = () => {
    return (
        <div>
            <FirstJs></FirstJs>
            <Headlines></Headlines>

            <div className='container mx-auto my-28'>
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <h2
                        className='text-7xl font-semibold'>Anything but
                        <br />
                        ordinary.</h2>
                    <p className='text-2xl mt-10'>Some would say it's out of this world. That's not far off.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <div className=' mt-24'>
                            <div>
                                <Link to='/home' >
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-60 '>
                                        <div style={{ width: '700px' }} tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5" >
                                            <div
                                                class=" text-xl font-medium p-4" >
                                                <p className='text-3xl font-semibold'> NASA INSPIRED
                                                </p>
                                            </div>
                                            <div class="collapse-content text-2xl mt-10">
                                                <p>
                                                    NOZE is powered by a single sensor built on years of NASA innovation. Our technology raises the bar to new heights <a>
                                                    </a>
                                                    by using the digital sense of smell to keep track of the air you're breathing.
                                                </p>

                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to='/home/engineered'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-60'>
                                        <div style={{ width: '700px' }} tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5" >
                                            <div class=" text-xl font-medium p-4" >
                                                <p className='text-3xl font-semibold'> ENGINEERED TO THINK</p>
                                            </div>
                                            <div class="collapse-content text-2xl mt-10">
                                                <p>NOZE uses artificial intelligence to decode the air around you in real-time, all the time. It actively samples the air every second and breaks things down into specifics so that you can act while it matters.</p>

                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className='mt-24 px-12'>
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>
            <Conqure></Conqure>
            <Break></Break>
            <div className='container mx-auto my-32'
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <h1 className='text-6xl font-semibold text-center'>What you can't see matters.</h1>
                <p className='mt-16 text-center text-xl leading-9'>NOZE also monitors a range of other pollutants to help make
                    <br />
                    indoor spaces safer places to live, work, and visit.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <div className=' mt-24'>
                            {/* 1 */}
                            <div>
                                <Link to='/carbon' >
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-60 '>
                                        <div tabindex="0" class="collapse collapse-plus   rounded-box p-3 mt-5" >
                                            <div
                                                class=" text-3xl font-semibold " >
                                                <p > Carbon Dioxide </p>
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                </Link>
                            </div>
                            {/* 2 */}
                            <div>
                                <Link to='/carbon/ammonia'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                                        <div tabindex="0" class="collapse collapse-plus   rounded-box p-3 mt-5" >
                                            <div
                                                class=" text-3xl font-medium " >
                                                <p> Ammonia</p>
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* 3 */}
                            <div>
                                <Link to='/carbon/formaldehyde'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                                        <div tabindex="0" class="collapse collapse-plus   rounded-box p-3 mt-5" >
                                            <div
                                                class=" text-3xl font-medium " >
                                                <p> Formaldehyde</p>
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* 4 */}
                            <div>
                                <Link to='/carbon/nitrogen'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                                        <div tabindex="0" class="collapse collapse-plus   rounded-box p-3 mt-5" >
                                            <div
                                                class=" text-3xl font-medium " >
                                                <p> Nitrogen Dioxide</p>
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* 5 */}
                            <div>
                                <Link to='/carbon/butanal'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                                        <div tabindex="0" class="collapse collapse-plus   rounded-box p-3 mt-5" >
                                            <div
                                                class=" text-3xl font-medium " >
                                                <p> Butanal</p>
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* 6 */}
                            <div>
                                <Link to='/carbon/partiular'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                                        <div tabindex="0" class="collapse collapse-plus   rounded-box p-3 mt-5" >
                                            <div
                                                class=" text-3xl font-medium " >
                                                <p> Particulate Matter</p>
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* 7 */}
                            <div>
                                <Link to='/carbon/ethanol'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                                        <div tabindex="0" class="collapse collapse-plus   rounded-box p-3 mt-5" >
                                            <div
                                                class=" text-3xl font-medium " >
                                                <p> Ethanol</p>
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* 8 */}
                            <div>
                                <Link to='/carbon/tobacco'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                                        <div tabindex="0" class="collapse collapse-plus   rounded-box p-3 mt-5" >
                                            <div
                                                class=" text-3xl font-medium " >
                                                <p>Tobacco Odour</p>
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* 9 */}
                            <div>
                                <Link to='/carbon/humidity'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                                        <div tabindex="0" class="collapse collapse-plus   rounded-box p-3 mt-5" >
                                            <div
                                                class=" text-3xl font-medium " >
                                                <p > Humidity </p>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 lg:mt-48'>
                        <Outlet></Outlet>
                    </div>
                </div>


            </div>
            <Vedios></Vedios>
            <Incredible></Incredible>
            <Wondering></Wondering>
            <HomeFaqs></HomeFaqs>
            <Stay></Stay>
        </div>
    );
};

export default Overview;