import React, {useState} from 'react';
import {HeroContainer, HeroBgFade, HeroTitle, HeroText, HeroButtonWrapper} from './HeroSectionElements';
import Margin from '../Margin';
import {DownArrow} from '../DownArrow';

const HeroSection = () => {

    return (
        <HeroContainer id={'home'}>
            <HeroBgFade>
                <Margin direction="vertical" margin="19em" />
                <HeroTitle>Natasha Li Vieira</HeroTitle>
                <Margin direction="vertical" margin="1em" />
                <HeroText>My work is your best solution</HeroText>
                <Margin direction="vertical" margin="1em" />
                <HeroButtonWrapper>
                    <DownArrow 
                        
                    />
                </HeroButtonWrapper>
            </HeroBgFade>
        </HeroContainer>
    );
};

export default HeroSection;