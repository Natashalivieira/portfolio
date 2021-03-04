import React from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-scroll';

const DownArrowContainer = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: rgba(113, 113, 113, 0.48);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    transition: all 220ms ease-in-out;
    cursor: pointer;

    &:hover {
        border: 1px solid #fff;
    }
`;

const IconContainer = styled(Link)`
    margin-top: 3px;
    color: #fff;
    font-size: 30px;
`;

export function DownArrow() {
    return (
    <DownArrowContainer>
        <IconContainer to="about" 
                        smooth={true} duration={500} spy={true}
                        exact='true' offset={-60} activeClass="active">
            <ExpandMoreIcon/>
        </IconContainer>
    </DownArrowContainer>
    );
}