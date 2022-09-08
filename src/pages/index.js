import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout> 
    <section className={styles.header}>
      <div>
        <h2>Wise energy</h2>
        <h3>Welcome to your favorite FMB003 tool</h3>
        <p>Where we make sense of all your tracker data to give your
          a quantifiable explanation why you have been spending so much on fuel.
          Who knows? We can even give you tips how to save fuel.
        </p>
        <Link className={styles.btn} to='/login'>Login NOW</Link>
       </div>
       <img src='/nasa.jpg' alt='site banner' style={{maxWidth: '150%'}}/>
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage