import React from 'react'
import { NavLink } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Container, LogoWrapper, NavbarSection, NavItems, Title } from './style';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

const Navbar = () => {
  return (
    <Container>
        <NavbarSection>
            <LogoWrapper>
                <Logo/>
                <Title className='to-uppercase'>Greenshop</Title>
            </LogoWrapper>
            <NavItems>
                <ul className='main-navigation__items'>
                    {
                        navbar.map((item) =>
                         <li key={item.id} className='main-navigation__item'>
                             <NavLink to={item.path}>{item.title}</NavLink>
                         </li>
                        )
                    }
                </ul>
            </NavItems>
            <button>Login</button>
        </NavbarSection>
    </Container>
  )
}

export default Navbar