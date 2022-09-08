import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/login.module.css'
import { Link } from 'gatsby'

const LoginPage = () => {
  return (
    <Layout>
        <main>
            <h1>Please enter the cellphone number for the simcard inside your FMB003 tracker</h1>
            <form action='/results'>
                <input type="tel" className={styles.input} required></input>
                <input type='submit' className={styles.btn} ></input>
            </form>
        </main>
  </Layout>
  )
}

export default LoginPage