import React from 'react';
import vedio2 from '../../src/assests/NOZEabout1.mp4'
import './Conqure.css'

const Conqure = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2'>
            <video autoplay src={vedio2} autoPlay controlsList='nodownload' loop muted="muted"></video>
            <div className='px-12'>
                <h1 className='conqurw-tittle'>Conquer the Virus</h1>
                <p className='conqure-info'>Noze tracks the airborne markers (VOCs) associated with the Coronavirus family. Our AI uses that information to deliver a real-time risk index that will not only tell you if your space is prone to spreading the virus, but whether there's a chance the virus is actually in the air.</p>
            </div>
        </div>
    );
};

export default Conqure;