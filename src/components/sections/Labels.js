import React from 'react'
import styled from 'styled-components';


// markup
const Labels = ({data}) => {


  return (
        <ContainerLabels>
            {data.map(({image, id}) => {
            return (
                <Cont key={id} >
                        <img
                            src={image.url}
                            alt={image.alt ? image.alt : 'Oatside Label'}
                        />
                </Cont>
            )
            })}
        </ContainerLabels>

  )
}

const ContainerLabels = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
  `

const Cont = styled.div`
    width: 10%;
    margin-left: 5%;
    margin-right: 5%;
    box-sizing: border-box;
    @media (max-width: 750px) {
        width: 20%;
        margin-left: 10px;
        margin-right: 10px;
    }
  `

export default Labels