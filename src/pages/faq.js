import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/Seo"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"


const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query  {
    datoCmsFaq {
      pageName
      fAQEditor
    }
  }
`)
  return(
<Layout>
    <Seo title="Home" />
    <Title>{data.datoCmsFaq.pageName}</Title>
    <Content dangerouslySetInnerHTML={{ __html: data.datoCmsFaq.fAQEditor }} />
  </Layout>
  )
}
  


const Title = styled.h1`
  text-align: center;
  margin-top: 280px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--amarillo);
  width: 400px;
  padding: 20px 50px;
  box-sizing: border-box;
  text-transform: uppercase;
  border-radius: 15px;
  font-family: var(--akMed);
  font-weight: normal;
  font-size: 2rem;
`

const Content = styled.div`
  padding: 20px;
  max-width: 550px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: var(--reMed);

  p strong {
    display: block;
    margin-bottom: 50px;
    margin-top: 50px;
    font-size: 2rem;
  }
  p{
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  a {
    text-decoration: underline;
  }
`

export default IndexPage
