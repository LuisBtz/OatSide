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
import Graphic from "../components/sections/Graphic"



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
                  gatsbyImageData(layout: FIXED)
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
              graphic {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  outputPixelDensities: 1.5
                  forceBlurhash: true
                )
                alt
            }
          }
          # allInstaNode {
          #   edges {
          #     node {
          #       localFile {
          #         childImageSharp {
          #           gatsbyImageData(layout: FULL_WIDTH)
          #         }
          #       }
          #       id
          #     }
          #   }
          # }
      }
`)

  return (
    <Layout>
      <Seo title="Home" />
      <RenderStyle data={data.datoCmsHome.homeDescription} />
      <Press data={data.datoCmsHome.logosSection} />
      <Labels data={data.datoCmsHome.labels} />
      <Products data={data.datoCmsHome} />
      <Where data={data.datoCmsHome} />
      <Graphic data={data.datoCmsHome.graphic} />
    </Layout>
  )
}
const RenderStyle = styled(RenderCarton)`
`

export default IndexPage
