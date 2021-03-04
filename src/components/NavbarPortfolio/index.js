import React, {useState, useEffect} from 'react';
import Logo from '../Logo';
import {Nav, NavLogoContainer} from './NavbarPortfolioElements.js';
import {animateScroll as scroll} from 'react-scroll';

const NavbarPortfolio = ({toggle}) => {
    const[scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 60) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
             <Nav scrollNav={scrollNav}>
                    <NavLogoContainer to="/" onClick={toggleHome}>
                        <Logo inline/>
                    </NavLogoContainer>                  
            </Nav>
        </>
    );
}

export default NavbarPortfolio;
