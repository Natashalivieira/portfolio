import React from 'react';
import { FooterContainer, FooterWrap, Platforms, PlatformsWrap, PlatformLogo, WebsiteRights, PlatformIcons, PlatformIconLink} from './FooterElements';
import myLogo from '../../images/Logo White.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome= () => {
        scroll.scrollToTop(true)
    }
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <Platforms>
                        <PlatformsWrap>
                            <PlatformLogo to='/' onClick={toggleHome}>
                                <img src={myLogo} height='50px' alt='NLV Logo'/>
                            </PlatformLogo>
                            <WebsiteRights>Natasha Li Vieira © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                            <PlatformIcons>
                                <PlatformIconLink href="//www.linkedin.com/in/natasha-li/" target="_blank" aria-label="LinkedIn"><LinkedInIcon/></PlatformIconLink>
                                <PlatformIconLink href="//m.facebook.com/nlivieira" target="_blank" aria-label="Facebook"><FacebookIcon/></PlatformIconLink>
                                <PlatformIconLink href="//www.instagram.com/natlivi" target="_blank" aria-label="Instagram"><InstagramIcon/></PlatformIconLink>
                            </PlatformIcons>
                        </PlatformsWrap>
                    </Platforms>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer;
