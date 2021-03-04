import styled from 'styled-components';
import myImage from '../../images/me.jpg';

export const HeroContainer = styled.div`
    background-image: url(${myImage});
    background-size: cover;
    height: 100vh;
    width: 100%;
    padding: 0;
    position: relative;
`;

export const HeroBgFade = styled.div`
    background-color: rgba(53, 53, 53, 0.88);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;    

export const HeroTitle = styled.h1`
    margin: 0;
    color: #fff;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 38px;
    }

    @media screen and (max-width: 480px) {
        font-size: 36px;
    }
`;

export const HeroText = styled.p`
    margin: 0;
    color: #fff;
    font-size: 22.8px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroButtonWrapper = styled.div`
    position: absolute;
    bottom: 35px;
    left: 50%;
    transform: translateX(-50%);
`;