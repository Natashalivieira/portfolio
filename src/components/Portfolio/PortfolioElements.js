import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {theme} from '../../theme';

export const PortfolioContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #9D9AF3;

    @media screen and (max-width: 768px) {
        height: 900px;
    }

    @media screen and (max-width: 480px) {
        height: 1000px;
    }
`;

export const PortfolioWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const PortfolioCard = styled(Link)`
    background: #fff;
    color: #000;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    &:active{
        color: ${theme.mycolor};
    }
`;

export const PortfolioIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const PortfolioH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const PortfolioH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const PortfolioP = styled.p`
    font-size: 1rem;
    text-align: center;
`;