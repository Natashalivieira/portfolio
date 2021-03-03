import React from 'react';
import { MyPortfolioContainer } from './MyPortfolioElements';
import Navbar from '../components/NavbarPortfolio';

const MyPortfolio = () => {
    return (
        <>
            <Navbar />
            <MyPortfolioContainer>
                My Portfolio
            </MyPortfolioContainer>
        </>
    )
}

export default MyPortfolio;
