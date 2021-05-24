import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"



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
        socialMediaPostsText
            illustration {
              gatsbyImageData(
                  layout: FULL_WIDTH
                  outputPixelDensities: 1.5
                  forceBlurhash: true
                )
                alt
            }
      }
      datoCmsSetting {
        socialMediaPostsText
      }
      # Instagram
      allInstagramContent {
            edges {
              node {
                localImage {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
                  }
                }
              id
              permalink
              }
            }
          }
    }
  `)

const getDataImage = getImage(data.datoCmsSetting.illustration);

  return (
    <>
      <ContainerGraphic>
        <GatsbyImage
            image={getDataImage}
            alt={data.datoCmsSetting.illustration.alt ? data.datoCmsSetting.illustration.alt : 'Oatside Graphic'}
        />
      </ContainerGraphic>

      <ContainerInsta>
            <h2 dangerouslySetInnerHTML={{ __html: data.datoCmsSetting.socialMediaPostsText }} />
            <CotenedorImages>
            {data.allInstagramContent.edges.slice(0, 4).map(({node}) => {
                  const getDataImage = getImage(node.localImage.childImageSharp);
            return (
                <Item href={node.permalink} target='_blank' rel="noreferrer" key={node.id} >
                        <GatsbyImage
                            image={getDataImage}
                            alt='Oatside Image Instagram'
                        />
                </Item>
            )
            })}
            </CotenedorImages>
        </ContainerInsta>
        
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
    </>
    
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
  @media (max-width: 750px) {
    flex-direction: column-reverse;
    .copy {
      text-align: center;
    }
  }
`

const Social = styled.div`
  display: flex;
  width: auto;
  margin-bottom: 50px;
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


const ContainerGraphic = styled.section`
    width: 80%;
    margin: 100px auto 50px;
    @media (max-width: 750px) {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
`


const ContainerInsta = styled.section`
    padding: 20px;
    margin: 50px auto 100px;
    h2 {
        text-align: center;
        margin-bottom: 50px;
        a {
            text-decoration: underline;
        }
    }
`

const CotenedorImages = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`

const Item = styled.a`
    width: 100%;
    align-self: center;
`


export default Footer

