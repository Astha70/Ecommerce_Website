import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import './pnf.css';

const Pagenotfound = () => {
  return (
    <Layout title={"Go back - page not found"}>
    <div className='pnf pt-5'>
      <h1 className='pnf-title'>404</h1>
      <h4 className='pnf-heading'>OOPS! Page Not Found</h4>
      <Link to='/' className='pnf-btn'>Go Back</Link>
    </div>
</Layout>
  )
}

export default Pagenotfound