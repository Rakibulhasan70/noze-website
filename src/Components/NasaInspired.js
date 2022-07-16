import React from 'react';
import vedio8 from '../../src/assests/NOZE-Hero-8.mp4'

const NasaInspired = () => {
    return (
        <div>
            <video src={vedio8} autoplay autoPlay controlsList='nodownload' loop muted="muted"></video>
            <p className='pl-32'>Engineered by <a style={{ textDecoration: 'underline' }} href="https://www.stratuscent.com/">Stratuscent inc.</a></p>
        </div>
    );
};

export default NasaInspired;