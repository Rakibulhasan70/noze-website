import React from 'react';
import vedios from '../../src/assests/Noze-vedio.mp4'

const Vedios = () => {
    return (
        <div className='  my-16'>
            <h1 className='text-6xl text-center font-semibold'>What's more important, form
                <br />
                or function?</h1>
            <p className='my-16 text-center text-xl'>We didn't think it was fair to have to choose.</p>
            <video autoplay src={vedios} autoPlay controlsList='nodownload' loop muted="muted"></video>
        </div>
    );
};

export default Vedios;