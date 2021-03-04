import React from 'react';
import styled, {css} from 'styled-components';
import myLogo from '../../images/Logo White.png';

const LogoContainer = styled.div`
    display: flex;
    flex-direction: ${({inline}) => inline ? "row" : "column"};
    align-items: ${({inline}) => inline && "center" };
    cursor: pointer;
`;

const LogoImg = styled.img`
    width: 8em;
    ${({inline}) => inline && css` width: 80px; `};
`;

function Logo(props) {
    const {inline} = props;

    return (
        <LogoContainer inline={inline}>
            <LogoImg inline={inline} src={myLogo} />
        </LogoContainer>  
    );
}

export default Logo;