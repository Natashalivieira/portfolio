import React from 'react';
import {HeroContainer, HeroBgFade, HeroTitle, HeroText, HeroButtonWrapper} from './HeroSectionElements';
import Margin from '../Margin';
import {DownArrow} from '../DownArrow';
import {Element, scroller} from 'react-scroll';

function HeroSection(props) {
    const scrollToInfoSection = () => {
        scroller.scrollTo('about', {
            smooth: true, 
            duration: 1500, 
            spy: true, 
            exact: true, 
            offset: -60
        });
    }
    return (
        <Element id="home">
            <HeroContainer>
                <HeroBgFade>
                    <Margin direction="vertical" margin="19em" />
                    <HeroTitle>Natasha Li Vieira</HeroTitle>
                    <Margin direction="vertical" margin="1em" />
                    <HeroText>My work is your best solution</HeroText>
                    <Margin direction="vertical" margin="1em" />
                    <HeroButtonWrapper onClick={scrollToInfoSection}>
                        <DownArrow />
                    </HeroButtonWrapper>
                </HeroBgFade>
            </HeroContainer>
        </Element>
    );
};

export default HeroSection;