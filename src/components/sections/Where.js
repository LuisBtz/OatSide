import React from 'react'
import styled from 'styled-components';

// markup
const Where = ({data}) => {


  return (
        <ContainerWhere>
            <Title>{data.whereToBuyText}</Title>
            <Links>
                {data.links.map(({id, text, url}) => {
                return (
                    <li key={id} >
                        <a href={url} target='_blank' rel="noreferrer">{text}</a>
                    </li>
                )
                })}
            </Links>
        </ContainerWhere>

  )
}

const ContainerWhere = styled.section`
    margin-top: 100px;
    text-align: center;
`
const Title = styled.h2`
    font-size: 1.5rem;
`
const Links = styled.ul`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    li {
        border: solid 1px black;
        margin: 0 20px;
        padding: 10px 20px;
        border-radius: 20px;
        box-sizing: border-box;
    }
`

export default Where