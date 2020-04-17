import { useStaticQuery, graphql } from "gatsby"

const useLilyPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      lily: file(relativePath: { eq: "lily.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return data.lily.childImageSharp.fluid
}

export default useLilyPhoto
