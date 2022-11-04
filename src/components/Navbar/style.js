import styled from "styled-components";

export const Container = styled.div`
    max-width: var(--width);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Title = styled.h4`
    color: #46A358;
    font-size: 18px;
`;

export const NavbarSection = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
`;

export const NavItems = styled.div`

    .main-navigation__items {
        display: flex;
        align-items: center;
    }

    .main-navigation__item {
        margin: 0 25px;
        position: relative;
    }

    a {
        font-family: 'Cera Pro';
        font-size: 16px;
        line-height: 20px;
        color: #3D3D3D;
    }

    a.active {
        font-weight: 700;
        color: #3D3D3D;
    }

    .main-navigation__item a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 0px;
        height: 3px;
    }
    
    .main-navigation__item a.active::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 3px;
        background: #46A358;
    }
`;
