import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header></Header>
            <section>
                <Outlet />
            </section>
            <Footer></Footer>
        </>
    );
};

export default Main;