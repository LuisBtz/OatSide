import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Where = ({data}) => {
    const getDataImage = getImage(data);

    return(
        <ContainerGraphic>
            <GatsbyImage
                image={getDataImage}
                alt={data.alt ? data.alt : 'Oatside Graphic'}
            />
        </ContainerGraphic>
    )
}

const ContainerGraphic = styled.section`
    width: 80%;
    margin: 100px auto 50px;
    @media (max-width: 750px) {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
`

export default Where