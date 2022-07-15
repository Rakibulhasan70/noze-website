import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../src/assests/NOZE-logo.svg'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start lg:w-full">
                        <Link to='/home' className="btn btn-ghost normal-case text-xl"><img className='w-full' src={logo} alt="" /></Link>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0 text-xl ">
                                <Link className='route' to='/home'>Overview</Link>
                                <Link className='route' to='/home'>Specs</Link>
                                <Link className='route' to='/home'>FAQs</Link>

                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex justify-items-end">
                        <ul className="menu menu-horizontal p-0 text-xl " >
                            <p className='route mt-4 mr-4'>Order for </p>
                            <button className='button'>Pre Order</button>
                        </ul>
                    </div>

                    <div className="navbar-end lg:w-0 mr-8">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                                <li><Link to='/home'>Overview</Link></li>
                                <li><Link to='/portfolio'>Specs</Link></li>
                                <li><Link to='/blogs'>FAQs</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;