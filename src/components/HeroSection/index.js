import React, {useState} from 'react';
import {HeroContainer, HeroBg, HeroContent, HeroTitle, HeroText, HeroButtonWrapper} from './HeroSectionElements';
import { Button } from '../ButtonElement';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id={'home'}>
            <HeroBg/>
            <HeroContent>
                <HeroTitle>Natasha Li Vieira</HeroTitle>
                <HeroText>My work is your best solution</HeroText>
                <HeroButtonWrapper>
                    <Button 
                    to="about" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true} duration={500} spy={true}
                    exact='true' offset={-80} activeClass="active"
                    >
                    <ExpandMoreIcon/> 
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;