import React from "react"
import styled from "styled-components"
import RenderCarton from "../components/carton/RenderCarton"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/Seo"
import { useStaticQuery, graphql } from "gatsby"
import Press from "../components/sections/Press"
import Labels from "../components/sections/Labels"
import Products from "../components/sections/Products"
import Where from "../components/sections/Where"
// import Graphic from "../components/sections/Graphic"
// import Instagram from "../components/sections/Instagram"
// import Sliderr from "../components/sections/Sliderr"




const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query  {
          datoCmsHome {
              seo {
                title
                description
                image {
                  url
                }
              }
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
                  gatsbyImageData(layout: FULL_WIDTH)
                  alt
                }
                id
              }
              # Product 1
              imageProduct1 {
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
                alt
              }
              imageDescriptionProduct1 {
                alt
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
              }
              nameProduct1
              descriptionProduct1
              # Product 2
              imageProduct2 {
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
                alt
              }
              imageDescriptionProduct2 {
                alt
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
              }
              nameProduct2
              descriptionProduct2
              # Product 3
              imageProduct3 {
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
                alt
              }
              imageDescriptionProduct3 {
                alt
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
              }
              nameProduct3
              descriptionProduct3
              # Where to buy
              whereToBuyText
              links {
                id
                text
                url
              }
          }
          # Settings
          datoCmsSetting {
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
      }
`)

  return (
    <Layout>
      <Seo title={data.datoCmsHome.seo && data.datoCmsHome.seo.title} description={data.datoCmsHome.seo && data.datoCmsHome.seo.description} image={data.datoCmsHome.seo.image.url} />
      <RenderStyle data={data.datoCmsHome.homeDescription} />
      <Press data={data.datoCmsHome.logosSection} />
      <Labels data={data.datoCmsHome.labels} />
      <Products data={data.datoCmsHome} />
      {/* <Sliderr /> */}
      <Where data={data.datoCmsHome} />
      {/* <Graphic data={data.datoCmsSetting.illustration} /> */}
      {/* <Instagram data={data.allInstagramContent.edges} insta={data.datoCmsSetting} /> */}
    </Layout>
  )
}
const RenderStyle = styled(RenderCarton)`
`

export default IndexPage
