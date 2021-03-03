import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { aboutObj, portfolioObj, contactObj } from '../components/InfoSection/Data';
import Portfolio from '../components/Portfolio';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <HeroSection />
            <InfoSection {...aboutObj}/>
            <InfoSection {...portfolioObj}/>
            <Portfolio />
            <InfoSection {...contactObj}/>
        </>
    );
};

export default Home;