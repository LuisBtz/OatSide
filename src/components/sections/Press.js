import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const Press = ({data}) => {


  return (
        <ContainerPress>
            {data.map(({ image, link, id }) => {
                  const getDataImage = getImage(image);
            return (
                <Element key={id}>
                    <a href={link} target='_blank' rel="noreferrer">
                        <GatsbyImage
                            image={getDataImage}
                            alt={image.alt}
                        />
                    </a>
                </Element>
            )
            })}
            {data.map(({ image, link, id }) => {
                  const getDataImage = getImage(image);
            return (
                <Element key={id}>
                    <a href={link} target='_blank' rel="noreferrer">
                        <GatsbyImage
                            image={getDataImage}
                            alt={image.alt}
                        />
                    </a>
                </Element>
            )
            })}
        </ContainerPress>

  )
}

const ContainerPress = styled.ul`
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    list-style: none;
    animation: trnslt 20s linear infinite;
    padding: 0 0 .5rem 0;
    width: max-content;
    

    @keyframes trnslt {
      0% { transform: translateX(0); }
      100% { transform: translatex(-2000px); }
    }

    /* Mobile */
    @media screen and (max-width: 768px) {
        animation-duration: 20s;
    }

  `

  const Element = styled.li`
    margin-right: 50px;
    margin-left: 50px;
  `

export default Press