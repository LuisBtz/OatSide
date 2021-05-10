import React from "react"
import styled from "styled-components"
import RenderCarton from "../components/carton/RenderCarton"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/Seo"
import { useStaticQuery, graphql } from "gatsby"
import Press from "../components/sections/press"
import Labels from "../components/sections/Labels"



const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query  {
          datoCmsHome {
              homeDescription
              logosSection {
                  image {
                    gatsbyImageData(layout: FIXED, forceBlurhash: true, height: 30)
                    alt
                  }
                  link
                  id
              }
              labels {
                image {
                  gatsbyImageData(layout: FIXED, width: 90)
                  alt
                }
                id
              }
          }
      }
`)

  return (
    <Layout>
      <Seo title="Home" />
      <RenderStyle data={data.datoCmsHome.homeDescription} />
      <Press data={data.datoCmsHome.logosSection} />
      <Labels data={data.datoCmsHome.labels} />
    </Layout>
  )
}
const RenderStyle = styled(RenderCarton)`
`

export default IndexPage
