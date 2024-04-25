import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { BsEnvelope } from "react-icons/bs";
import { TiSocialInstagram } from "react-icons/ti";


const Footer = () => {
  return (
    // <footer className="footer bg-dark p-3 text-white ">
    //     <h1 className="text-center">
    //         All Right Reserved
    //     </h1>
    //     <p className='text-center mt-3'>
    //       <Link to="/about">About</Link>
    //       |
    //       <Link to="/contact">Contact</Link>
    //       |
    //       <Link to="/policy">Privacy Policy</Link>
    //     </p>
    // </footer>


// bg-dark

<footer className="footer ">
  <section className="py-4 py-md-5 py-xl-8 border-top border-light bg-light">
    <div className="container overflow-hidden">
      <div className="row gy-4 gy-lg-0 justify-content-xl-between">
        <div className="col-12 col-md-4 col-lg-3 col-xl-2">
          <div className="widget">
            <h4 className="widget-title mb-4">Get in Touch</h4>
            <address className="mb-4">ABCD Floor X Lane, Someplace, Somewhere, Earth</address>
            <p className="mb-1">
             (+91) 987654321
            </p>
            <p className="mb-0">
              demo@somedomain.com
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-3 col-xl-2">
          <div className="widget">
            <h4 className="widget-title mb-4">Learn More</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="link-secondary text-decoration-none">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="link-secondary text-decoration-none">Contact</Link>
              </li>
              <li className="mb-2">
                <Link to="/policy" className="link-secondary text-decoration-none">Privacy Policy</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-xl-4">
          <div className="widget">
            <h4 className="widget-title mb-4">Our Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter to get our news & discounts delivered to you.</p>
            <form action="#!">
              <div className="row gy-4">
                <div className="col-12">
                  <div className="input-group">
                    <span className="input-group-text" id="email-newsletter-addon">
                    <BsEnvelope />
                    </span>
                    <input type="email" className="form-control" id="email-newsletter" value="" placeholder="Email Address" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required/>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn btn-primary btn-gradient" type="submit">Subscribe</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="bg-dark py-4 py-md-5 py-xl-8 border-top border-light-subtle">
    <div className="container overflow-hidden">
      <div className="row gy-4 gy-md-0">
        <div className="col-xs-12 col-md-7 order-1 order-md-0">
          <div className="copyright text-center text-md-start text-light">
            &copy; 2024. All Rights Reserved.
          </div>
          <div className="credits text-secondary text-center text-md-start mt-2 fs-7">
            Built by Astha Singh Kushwaha with &#9829;
          </div>
        </div>

        <div className="col-xs-12 col-md-5 order-0 order-md-1">
          <ul className="nav justify-content-center justify-content-md-end">
            <li className="nav-item">
              <a className="nav-link link-light" href="#!">
              <FaFacebook />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#!">
              <TiSocialYoutube />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#!">
              <TiSocialTwitter />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" height="55px" width="55px" href="#!">
              <TiSocialInstagram  />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</footer> 
  )
}

export default Footer;