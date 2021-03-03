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
import { Button } from '../ButtonElement';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, dark, primary, description, img, alt, buttonDesc, button}) => {
    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
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
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80} activeClass="active"
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
        </>
    )
}

export default InfoSection
