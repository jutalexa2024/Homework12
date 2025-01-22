import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer'; 

const App = () => {
    return (
        <Router>
            <Header />
            <div className="min-h-screen w-screen bg-gray-100 flex flex-col">
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/resume" element={<Resume />} /> */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;


