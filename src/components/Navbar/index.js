import React, {useState, useEffect} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import myLogo from '../../images/Logo White.png';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements.js';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {
    const[scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
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
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}><img src={myLogo} height='50px' alt='NLV logo'/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <MenuIcon />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-80} activeClass="active"
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio"
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-80}
                            >Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-80}
                            >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
