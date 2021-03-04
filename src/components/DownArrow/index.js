import React from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const DownArrowContainer = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: rgba(100, 100, 100, 0.50);
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

const IconContainer = styled.div`
    margin-top: 3px;
    color: #fff;
    font-size: 30px;
`;

export function DownArrow() {
    return (
    <DownArrowContainer>
        <IconContainer>
            <ExpandMoreIcon/>
        </IconContainer>
    </DownArrowContainer>
    );
}