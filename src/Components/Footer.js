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
                <label for="my-modal-3" className='ml-6'>Contact</label>
            </div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Need to get in touch with our team? We're all ears.</h3>
                    <p class="py-4">Fill out the form and we'll be in touch real soon.</p>
                    <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs mt-3" />
                    <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs mt-3" />
                    <textarea name="" id="" cols="30000" rows="10000" type="text" placeholder="Message" class="input input-bordered w-full max-w-xs mt-3 p-3"></textarea>
                    <input type="text" placeholder="Send" class="input input-bordered  w-full max-w-xs mt-3 btn btn-primary" />
                </div>
            </div>

        </div>
    );
};

export default Footer;