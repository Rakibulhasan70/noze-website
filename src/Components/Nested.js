import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Nested = () => {
    return (
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
                            <Link to='/home' >
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
                            <Link to='/home/ammonia'>
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
                            <Link to='/home/formaldehyde'>
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
                            <Link to='/home/nitrogen'>
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
                            <Link to='/home/butanal'>
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
                            <Link to='/home/partiular'>
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
                            <Link to='/home/ethanol'>
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
                            <Link to='/home/tobacco'>
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
                            <Link to='/home/humidity'>
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
                <div className='mt-32'>
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default Nested;