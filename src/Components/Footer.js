import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 mt-52 footer'>
            <div className='flex ml-28 lg:ml-16 mt-5'>
                <a href="https://www.facebook.com/GetNoze"><i class="fa-brands fa-facebook text-3xl text-primary"></i></a>
                <a href="https://twitter.com/GetNoze"><i class="fa-brands fa-twitter ml-8 text-3xl text-primary"></i></a>
                <a href="https://www.instagram.com/getnoze/"><i class="fa-brands fa-instagram ml-8 text-3xl text-primary"></i></a>
            </div>
            <p className='ml-32 text-primary mt-5'>2021 NOZE</p>
            <div className='flex ml-16 mt-5'>
                <Link to='/privacy'>Privacy policy</Link>
                <Link className='ml-6 ' to='/terms'>Terms of Use</Link>
                <Link className='ml-6' to='/contact'>Contact</Link>
            </div>

        </div>
    );
};

export default Footer;