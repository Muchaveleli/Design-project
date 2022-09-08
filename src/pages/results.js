import React from 'react'
import Layout from '../components/layout'
import Data from '../components/data'
import * as styles from '../styles/results.module.css'

export default function results() {
  return (
    <Layout classname={styles.all}>
        <h3>Here are your energy log results</h3>
        <iframe src="https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=113080396&measures=off&title=off&near=off&images=off&maptype=H"
        title='results'
        height='400'
        width='800'></iframe>
        <Data></Data>
    </Layout> 

  )
}
