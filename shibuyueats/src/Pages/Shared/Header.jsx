import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import Logo from '../../assets/icons/bowl.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8
    return (
        <div className='bg-gradient-to-r from-teal-200'>
            <div className='bg-gradient-to-r from-teal-200 container mx-auto relative flex items-center justify-between  p-3 rounded-lg'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    <img className='h-12 w-12 text-blue-500' src={Logo} alt="" />
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                        Shibuyu<span className='text-blue-700'>Eats</span>
                    </span>
                </Link>

                {/* User display section */}
                <label tabIndex={0} className={`btn btn-ghost btn-circle avatar`}>
                    <div className={` w-40  rounded-full`}>
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100">
                            <span className="bg-gray-900 text-white py-1 px-2 rounded">Tag Namesf</span>
                        </div>
                    </div>

                </label>

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-emerald-700 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/login'
                            className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-emerald-700 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
                        >
                            <button className="btn btn-outline btn-primary text-emerald-700">Login</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-emerald-700 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-10 text-emerald-700 ' />
                    </button>
                    {isMenuOpen && (
                        <div className=' absolute top-0 left-0 w-full z-10'>
                            <div className='bg-gradient-to-r from-teal-200  p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            <img className='h-12 w-12 text-blue-500' src={Logo} alt="" />
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                                                Shibuyu<span className='text-blue-700'>Eats</span>
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-10 text-emerald-700' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='default'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/login'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                <button className="btn btn-outline btn-primary">Login</button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/blog'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header