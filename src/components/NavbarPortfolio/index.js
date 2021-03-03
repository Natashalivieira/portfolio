import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './NavbarPortfolioElements';
import myLogo from '../../images/Logo White.png';

const NavbarPortfolio = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <img src={myLogo} height='50px' alt='NLV Logo' />
                </NavLogo>
            </NavbarContainer>
        </Nav>
    )
}

export default NavbarPortfolio
