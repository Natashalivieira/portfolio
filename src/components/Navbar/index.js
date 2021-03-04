import React, {useState, useEffect} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../Logo';
import {Nav, NavLogoContainer, MobileIcon, NavMenu, NavItems, NavLinks} from './NavbarElements.js';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {
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
                    <MobileIcon onClick={toggle}>
                        <MenuIcon />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-60} activeClass="active"
                            >About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="portfolio"
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-60}
                            >Portfolio</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="contact"
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-60}
                            >Contact</NavLinks>
                        </NavItems>
                    </NavMenu>                    
            </Nav>
        </>
    );
}

export default Navbar;
