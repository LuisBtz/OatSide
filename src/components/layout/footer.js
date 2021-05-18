import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';


// markup
const Footer = () => {

  const data = useStaticQuery(graphql`
  query  {
      datoCmsSetting {
        copyrightFooter
        socialMedia {
          link
          id
          image {
            url
            alt
          }
        }
      }
    }
  `)

  return (
    <FooterStyle>
      <div className='copy' dangerouslySetInnerHTML={{ __html: data.datoCmsSetting.copyrightFooter }} />
      <Social>
        {data.datoCmsSetting.socialMedia.map(({image, link, id}) => {
              return (
                  <ItemStyle key={id} href={link} target='_blank' rel="noreferrer" >
                          <img
                              src={image.url}
                              alt={image.alt ? image.alt : 'Oatside Social Network'}
                          />
                  </ItemStyle>
              )
        })}
      </Social>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  margin-bottom: 50px;
  padding: 20px 50px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .copy {
    font-size: 0.8rem;
  }
`

const Social = styled.div`
  display: flex;
  width: auto;
`

const ItemStyle = styled.a`
  display: block;
  width: auto;
  align-self: center;
  justify-content: center;
  margin-left: 20px;
  img {
    width: auto;
    height: 16px;
  }
`


export default Footer

