import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';





// markup
const Footer = () => {

  const data = useStaticQuery(graphql`
  query  {
      datoCmsSetting {
        copyrightFooter
      }
    }
  `)

  return (
    <footer>
      <p dangerouslySetInnerHTML={{ __html: data.datoCmsSetting.copyrightFooter }} />
    </footer>
  )
}


export default Footer

