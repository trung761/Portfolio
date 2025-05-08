import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Header from '../components/header';
import AboutLayout from '../layout/about';
import PortfolioLayout from '../layout/portfolio';
import ContactLayout from '../layout/contact';

const AppRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutLayout />} />
                <Route path="/portfolio" element={<PortfolioLayout />} />
                <Route path="/contact" element={<ContactLayout />} />
            </Routes>
          
        </>
    );
}

export default AppRouter;
