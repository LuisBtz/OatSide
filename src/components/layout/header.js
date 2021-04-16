import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Header = () => {
  
  const data = useStaticQuery(graphql`
  query  {
    datoCmsSetting {
      middleTextInHeader
      mail
      logo {
            url
            }
      }
    }
  `)

const mail = data.datoCmsSetting.mail;
const logo = data.datoCmsSetting.logo.url;
const middleTextInHeader = data.datoCmsSetting.middleTextInHeader;
  return(
    <header>
    <NavStyles>
      <ul>
        <First>
          <a href={'mailto:'+ mail}>Contact Us</a>
        </First>
        <Middle>
          {middleTextInHeader}
        </Middle>
        <Final>
          <Link to='/faq'>F.A.Q.</Link>
        </Final>
      </ul>
    </NavStyles>
    <Logo src={logo} />
  </header>
  )
}

const NavStyles = styled.nav`
padding: 20px;
box-sizing: border-box;
width: 100%;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr)
  }
`

const First = styled.li`
  font-family: var(--akMed);
  text-transform: uppercase;
  align-self: center;
`
const Middle = styled.li`
  align-self: center;
  justify-self: center;
  text-align: center;
  font-size: 1.2rem;
  width: 100px;
`

const Final = styled.li`
  align-self: center;
  justify-self: end;
  font-family: var(--akMed);
`

const Logo = styled.img`
  width: 60%;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%)
`


export default Header
