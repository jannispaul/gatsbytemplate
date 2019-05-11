import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Project = styled.div`
    max-width: 1168px;
    margin: auto;
    
    &>div{
        padding: 24px var(--padding-side);
    }


`

/*Company Tag*/
const Company = styled.span`
    font-weight: 600;
    color: var(--color-gray-dark);
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 1.79;
    text-transform: uppercase;
`

const SingleProject = (props) => (
    <Project>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} alt={props.imageAltText}/>
        <div>
            <Company>{props.company}</Company>
            <h2>{props.title}</h2>
            <button>Zeig mir mehr ➝</button>
        </div>    
    </Project>
)


export default props => (
    <StaticQuery
        query={graphql`
        query {
            imageOne: file(relativePath: { eq: "gatsby-astronaut-2.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
        }
        `}
    render={data => <SingleProject data={data} {...props} />}
    />
)