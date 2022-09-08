import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from '../styles/data.module.css'

export default function Data() {
    const images = useGallery()
  return (
        <div className={styles.gallery}>
            {images.map(({ id, fluid }) => (
                <Img key={id} fluid={fluid} />
            ))}
        </div>
    )
}

const useGallery = () => {
    const data = useStaticQuery(graphql`
      query {
        allFile(
          filter: { sourceInstanceName: { eq: "gallery" } }
        ) {
          nodes {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `);
  
    return data.allFile.nodes.map(node => ({
      ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
      id: node.id,
    }));
  };
  