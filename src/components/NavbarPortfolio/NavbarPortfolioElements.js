import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Nav = styled.div`
    background: #000;
    height: 80px;
    position: sticky;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 10;
    display: flex;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 1000px;
    padding: 0 24px;
    max-width: 1100px;
    z-index: 1;
`;

export const NavLogo = styled(Link)`
    text-decoration: none;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    margin-left: 24px;
    align-items: center;
`;