import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Instagram = ({data, insta}) => {

    return(
        <ContainerInsta>
            <h2 dangerouslySetInnerHTML={{ __html: insta.socialMediaPostsText }} />
            <CotenedorImages>
            {data.slice(0, 4).map(({node}) => {
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
    )
}

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

export default Instagram