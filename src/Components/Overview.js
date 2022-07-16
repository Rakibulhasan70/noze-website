import React from 'react';
import FirstJs from './FirstJs';
import Headlines from './Headlines';
import SecondPart from './SecondPart';
import { Link, Outlet } from 'react-router-dom';
import icone from '../../src/assests/NOZE_Hero-9.svg'
import Conqure from './Conqure';
import Break from './Break.js';
import Vedios from './Vedios';
import Wondering from './Wondering';

const Overview = () => {
    return (
        <div>
            <FirstJs></FirstJs>
            <Headlines></Headlines>
            {/* <SecondPart></SecondPart> */}

            <div className='container mx-auto my-28'>
                <h2 className='anything'>Anything but
                    <br />
                    ordinary.</h2>
                <p className='anything-info'>Some would say it's out of this world. That’s not far off.</p>
                <div className=' mt-24'>
                    <div>
                        <Link to='/home' >
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-60 '>
                                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5" >
                                    <div class=" text-xl font-medium p-4" >
                                        <p style={{ fontWeight: '700', fontSize: '19px' }}> NASA INSPIRED
                                        </p>
                                    </div>
                                    <div class="collapse-content">
                                        <p>
                                            NOZE is powered by a single sensor built on years of NASA innovation. Our technology raises the bar to new heights <a >
                                                <img src={icone} alt="" />
                                            </a>
                                            by using the digital sense of smell to keep track of the air you’re breathing.
                                        </p>

                                    </div>
                                </div>
                                <div>
                                    <Outlet></Outlet>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/home/engineered'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-60'>
                                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5" >
                                    <div class=" text-xl font-medium p-4" >
                                        <p style={{ fontWeight: '700', fontSize: '19px' }}> ENGINEERED TO THINK</p>
                                    </div>
                                    <div class="collapse-content">
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
            <Conqure></Conqure>
            <Break></Break>
            <Vedios></Vedios>
            <Wondering></Wondering>
        </div>
    );
};

export default Overview;