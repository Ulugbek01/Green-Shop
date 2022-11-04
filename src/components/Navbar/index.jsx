import React from 'react'
import { NavLink } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Container, LogoWrapper, NavbarSection } from './style';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

const Navbar = () => {
  return (
    <Container>
        <NavbarSection>
            <LogoWrapper>
                <Logo/>
                <h5>Greenshop</h5>
            </LogoWrapper>
            {
                navbar.map((item) => 
                <NavLink key={item.id} to={item.path}>{item.title}</NavLink>
                )
            }
        </NavbarSection>
    </Container>
  )
}

export default Navbar