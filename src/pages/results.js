import React from 'react'
import Layout from '../components/layout'

export default function results() {
  return (
    <Layout>
        <h3>Here are your energy log results</h3>
        <iframe src="https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=113080396&measures=off&title=off&near=off&images=off&maptype=H"
         //src='https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=113080396&measures=off&title=off&near=off&images=off&maptype=H'
        title='results'
        height='400'
        width='600'></iframe>
    </Layout> 

  )
}
