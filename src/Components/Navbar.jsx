import styled from "styled-components";
import { Link } from 'react-router-dom'
import { mobile } from "../responsive";

const Navbar = (props) => {

  window.addEventListener("scroll", function () {
    const container = document.querySelector(".container");
    container.classList.toggle("active", window.scrollY > 0);
  });

    return (
        <Nav className='container'>
            <Logo>
                <img src="/images/logo_2.png" alt="LOGO" />
            </Logo>
            <NavMenu>
            <Link to="/">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </Link>
            <Link to="/movies">
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </Link>
            <Link to = "/series">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <Link to="/login" >
            <Login>Log In</Login>
          </Link>
        </Nav>    
    )
}

const Nav = styled.nav`
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  height: 90px;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 10;
  transition: all 0.7s ease-in-out;
  ${mobile({ width: '100%', height: '50px', padding: '0 10px'})};
`;

const Logo = styled.a`
  img {
    width: 130px;
    ${mobile({ width: '50px'})};

  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  position: relative;
  left: 3rem;
  /* margin-left: 35px; */

  a {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    ${mobile({ padding: '0 10px'})};

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      margin-right: 5px;
      z-index: auto;
      ${mobile({ display: 'none'})};
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      ${mobile({ fontSize: '9px'})};

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
      cursor: pointer;
    }
  }
  ${mobile({ 
    left: 0
  })};

`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.185);
  padding: 8px 16px;
  position: relative;
  left: 45vw;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  ${mobile({ 
    padding: '3px 6px',
    left: '13vw'
  })};
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;



export default Navbar;