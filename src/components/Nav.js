/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/img/img-brand-logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const NavStyles = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    transition: all 0.5s ease;
    li {
      padding: 0.5rem 1.5rem;
    }
    > button:nth-child(5) {
      margin-right: 2rem;
    }
    @media only screen and (max-width: 750px) {
      /* display: none; */
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0%;
      background-color: var(--white);
      z-index: 1;
      flex-direction: column;
      overflow: hidden;
      gap: 1rem;
      svg {
        align-self: flex-end;
        padding: 2rem 1rem;
      }
      button {
        padding: 1rem;
        margin: 0 1rem;
      }
      > button:nth-child(5) {
        margin-right: 1rem;
      }
    }
  }

  svg {
    cursor: pointer;
    color: var(--darkBlue);
    display: none;
    @media only screen and (max-width: 750px) {
      display: block;
    }
  }
`;

const NavWrapper = styled.nav`
  box-shadow: var(--shadowNav);
  background-color: var(--white);
`;

const ButtonNav = styled.button`
  cursor: pointer;
  border: none;
  padding: 0 1rem;
  border-radius: 2px;
  font-size: 1rem;
`;

function Nav() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <NavWrapper>
      <NavStyles className="container">
        <Link to="/">
          <img src={Logo} alt="Triasse Brand Logo" />
        </Link>
        <ul
          style={{
            height: `${open ? '100%' : '0%'}`,
          }}
        >
          <GiHamburgerMenu size={25} onClick={handleClick} />
          <li>
            <a href="#">Paket Test Darah</a>
          </li>
          <li>
            <a href="#">Laboratorium</a>
          </li>
          <li>
            <a href="#">Artikel</a>
          </li>
          <ButtonNav className="signin">Masuk</ButtonNav>
          <ButtonNav className="signup">Daftar</ButtonNav>
        </ul>
        <GiHamburgerMenu size={25} onClick={handleClick} />
      </NavStyles>
    </NavWrapper>
  );
}

export default Nav;
