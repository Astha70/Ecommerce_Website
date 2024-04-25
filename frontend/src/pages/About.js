import React from 'react'
import Layout from '../components/Layout/Layout'
import Img from  '../images/signup-image.jpg';
import './contact.css';

const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
      <div className="row contactus pt-5">
        <div className="col-md-6 imga p-5">
          <img
            src={Img}
            alt="contactus"
          />
        </div>
        <div className="col-md-4">
          <h3>ABOUT US</h3>
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
    )
}

export default About