import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const Labels = ({data}) => {


  return (
        <ContainerLabels>
            {data.map(({image, id}) => {
                  const getDataImage = getImage(image);
            return (
                <div key={id} >
                        <GatsbyImage
                            image={getDataImage}
                            alt={image.alt ? image.alt : 'Oatside Label'}
                        />
                </div>
            )
            })}
        </ContainerLabels>

  )
}

const ContainerLabels = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    div {
        margin-right: 15px;
        margin-left: 15px;
    }
  `

export default Labels