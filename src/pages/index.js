import React from "react"
import styled from "styled-components"
import RenderCarton from "../components/carton/RenderCarton"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <RenderStyle />
    <h1>Hi people</h1>
  </Layout>
)

const RenderStyle = styled(RenderCarton)`
`

export default IndexPage
