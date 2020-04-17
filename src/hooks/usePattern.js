import { useStaticQuery, graphql } from "gatsby"

const usePattern = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "light-grey-terrazzo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return data.desktop.childImageSharp.fluid
}

export default usePattern
