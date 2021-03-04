import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background: #000;
`;

export const FooterWrap = styled.div`
    padding: 30px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const Platforms = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const PlatformsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const PlatformLogo = styled(Link)`
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;    
`;

export const PlatformIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const PlatformIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;

               
                    
                        
                            
                                
                                    