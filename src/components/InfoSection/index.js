import React, { useState } from 'react';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Header, 
    Subtitle, 
    ButtonWrapper,
    ImgWrap, 
    Img,
    } from './InfoSectionElements';
import { Button } from '../Button';
import { Element } from 'react-scroll';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, dark, primary, big, description, img, alt, buttonDesc, button}) => {
    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <Element id={id}>
                <InfoContainer lightBg={lightBg}>
                    <InfoWrapper>
                        <InfoRow imgStart={imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine lightText={lightText}>{topLine}</TopLine>
                                    <Header lightText={lightText}>{headLine}</Header>
                                    <Subtitle darkText={darkText}>{description}</Subtitle>
                                </TextWrapper>
                                <ButtonWrapper>
                                    <Button
                                    to={button}
                                    onMouseEnter={onHover} 
                                    onMouseLeave={onHover}
                                    primary={primary}
                                    dark={dark}
                                    big={big}
                                    smooth={true} duration={1500} spy={true}
                                    exact='true' offset={-60} activeClass="active"
                                    >
                                    {buttonDesc}
                                    </Button>
                                </ButtonWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={img} alt={alt}/>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>  
            </Element>
        </>
    )
}

export default InfoSection
