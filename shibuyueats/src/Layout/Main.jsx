import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Main = () => {

    return (
        <>
            <Header></Header>
            <Toaster />
            <section>
                <Outlet />
            </section>
            <Footer></Footer>
        </>
    );
};

export default Main;