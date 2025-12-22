import React from 'react';
import Navbar from './../../components/commonPart/Navbar';
import Footer from './../../components/commonPart/Footer';
import Banner from './../../components/banner/Banner';

const page = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Footer />
        </div>
    );
};

export default page;