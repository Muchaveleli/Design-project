import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/login.module.css'
import { Link } from 'gatsby'

const LoginPage = () => {
  return (
    <Layout>
        <main>
            <h1>Please enter the cellphone number for the simcard inside your FMB003 tracker</h1>
            <form>
                <input type="tel" className={styles.input}></input>
                <Link className={styles.btn} to='/results'>Submit</Link>
            </form>
        </main>
  </Layout>
  )
}

export default LoginPage