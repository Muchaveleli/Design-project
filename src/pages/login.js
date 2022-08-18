import * as React from 'react'
import Layout from '../components/layout'

const LoginPage = () => {
  return (
    <Layout>
        <main>
            <h1>Please enter the cellphone number for the simcard inside your FMB003 tracker</h1>
            <form>
                <input type="tel"></input>
                <input type="submit"></input>
            </form>
        </main>
  </Layout>
  )
}

export default LoginPage