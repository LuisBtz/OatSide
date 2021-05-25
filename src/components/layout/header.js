import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Header = () => {
  
  const data = useStaticQuery(graphql`
  query  {
    datoCmsSetting {
      middleTextInHeader
      mail
      logo {
            url
            }
      sidebarImages {
        gatsbyImageData(
          layout: FULL_WIDTH
          outputPixelDensities: 1.5
          forceBlurhash: true
        )
        alt
        title
        originalId
      }
    }
  }
  `)

const mail = data.datoCmsSetting.mail;
const logo = data.datoCmsSetting.logo.url;
const middleTextInHeader = data.datoCmsSetting.middleTextInHeader;


const [show, setShow] = useState(false);


  return(
    <Contenedor>
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
          <Logo src={logo} alt='Logo Oatside' />
    </header>
    <Sidebar className={show ? 'show' : '' }>
      <Label src='/label.svg' alt='label oatside' 
        onClick={ () => 
          {
            setShow(!show)
          } 
        } 
      />
      <Imagenes>
        {data.datoCmsSetting.sidebarImages.map(({gatsbyImageData, alt, title, originalId}) => {
                    const getDataImage = getImage(gatsbyImageData);
              return (
                  <Item key={originalId} >
                          <GatsbyImage
                              image={getDataImage}
                              alt={alt ? alt : 'Oatside Illustration'}
                          />
                          <Caption>{title}</Caption>
                  </Item>
              )
        })}
      </Imagenes>
    </Sidebar>
  </Contenedor>
  )
}



const NavStyles = styled.nav`
padding: 20px 50px;
box-sizing: border-box;
width: 100%;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr)
  }
  @media (max-width: 750px) {
    padding: 20px 20px;
  }
`

const First = styled.li`
  font-family: var(--akMed);
  text-transform: uppercase;
  align-self: center;
  font-size: 0.8rem;
  @media (min-width:  1500px) {
    font-size: 2rem;
  }
`
const Middle = styled.li`
  align-self: center;
  justify-self: center;
  text-align: center;
  font-size: 1.2rem;
  width: 100px;
  @media (max-width: 750px) {
    font-size: 1rem;
  }
  @media (min-width:  1500px) {
    font-size: 2rem;
  }
`

const Final = styled.li`
  align-self: center;
  justify-self: end;
  font-family: var(--akMed);
  font-size: 0.8rem;
  @media (min-width:  1500px) {
    font-size: 2rem;
  }
`

const Logo = styled.img`
  width: 60%;
  position: absolute;
  z-index: -1;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
`
const Label = styled.img`
  position: absolute;
  top: 0;
  left: -80px;
  width: 80px;
  cursor: pointer;
  @media (max-width: 750px) {
    left: -65px;
    width: 70px;
  }
`
const Imagenes = styled.div`
  overflow-y: scroll;
  height: 100vh;
  padding-bottom: 200%;
  box-sizing: border-box;
`



const Sidebar = styled.div`
  width: 450px;
  position: fixed;
  right: -450px;
  top: 40%;
  background-color: var(--azul);
  padding: 30px 50px;
  box-sizing: border-box;
  z-index: 2;
  transition: all 350ms ease-in-out;
  @media (max-width: 650px) {
    right: -70%;
    width: 70%;
  }
`

const Item = styled.div`
  margin-bottom: 50px;
`

const Caption = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.3rem;
`

const Contenedor = styled.div`
  .show {
    right: 0;
    transition: all 350ms ease-in-out;
  }
`

export default Header
