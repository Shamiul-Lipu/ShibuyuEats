import React from 'react';
import { Link } from 'react-router-dom';
import Chefs from './Chefs';
import Member from './Extra/Member';
import Reviews from './Extra/Reviews';

const Home = () => {
    return (
        <section>
            {/* Banner section */}
            <section>
                <div className='bg-gray-100 px-4 py-5  hero min-h-screen   bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("https://i.ibb.co/tstLTgP/Screenshot-24.png")` }}>

                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl md:text-7xl lg:text-7xl text- font-bold font-mono bg-gradient-to-r from-emerald-300 via-cyan-100 to-purple-400 text-transparent bg-clip-text">Welcome to ShibuyuEats</h1>
                            <div className='text-gray-300 font-semibold'>
                                <h5>Cook up a storm with our mouth-watering recipes that will leave your guests asking for more.</h5>
                                <p className="mb-5">Get access to exclusive recipes from top chefs around the world and impress your guests.</p>
                            </div>
                            <Link to='/login'>
                                <button className="btn btn-primary">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner section ends */}
            {/* chefs section starts */}
            <section className='container mx-auto py-10'>
                <Chefs></Chefs>
            </section>
            {/* Extra Features Sections */}
            {/* Extra Features Sections */}
            <section>
                <Member></Member>
            </section>
            <section>
                <Reviews></Reviews>
            </section>
        </section>
    );
};

export default Home;