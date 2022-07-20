import React from 'react';
import './FirstJs.css'
import image6 from '../../src/assests/NOZE-Hero-1.png'

const FirstJs = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-24'>
            <div >
                <h2 className='title text-7xl font-semibold'>There’s
                    <br />
                    something
                    <br />
                    new
                    in the air</h2>
                <p className='mt-6 first-info'>NOZE is an AI powered air quality monitor that works
                    <br />
                    to keep you safe. Breathe easy.</p>
            </div>
            <div >
                <img className='first-img' src={image6} alt="" />
            </div>
        </div>
    );
};

export default FirstJs;