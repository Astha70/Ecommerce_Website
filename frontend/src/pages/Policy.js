import React from 'react'
import Layout from '../components/Layout/Layout'
import './contact.css';
import Img from  '../images/signup-image.jpg';

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus pt-5 ">
        <div className="col-md-6 p-5">
          <img
            src={Img}
            alt="Policy"
          />
        </div>
        <div className="col-md-4">
          <h3>Policy Page</h3>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy