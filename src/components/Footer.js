import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='ftco-footer ftco-bg-dark ftco-section'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-md'>
            <div className='ftco-footer-widget mb-4'>
              <h2 className='ftco-heading-2'>
                <a href='' className='logo'>
                  Car<span>book</span>
                </a>
              </h2>
              <p>
              CarBook is India’s largest online B2B marketplace, connecting buyers with suppliers.
              </p>
              <ul className='ftco-footer-social list-unstyled float-md-left float-lft mt-5'>
                <li className='ftco-animate'>
                  <Link>
                    <span className='icon-twitter'></span>
                  </Link>
                </li>
                <li className='ftco-animate'>
                  <Link>
                    <span className='icon-facebook'></span>
                  </Link>
                </li>
                <li className='ftco-animate'>
                  <Link>
                    <span className='icon-instagram'></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md'>
            <div className='ftco-footer-widget mb-4 ml-md-5'>
              <h2 className='ftco-heading-2'>Information</h2>
              <ul className='list-unstyled'>
                <li>
                  <a href='/about' className='py-2 d-block'>
                    About
                  </a>
                </li>
                <li>
                  <a href='/services' className='py-2 d-block'>
                    Services
                  </a>
                </li>
                <li>
                  <a href='/blogs' className='py-2 d-block'>
                    Blogs
                  </a>
                </li>
                <li>
                  <Link className='py-2 d-block'>Term and Conditions</Link>
                </li>

                <li>
                  <Link className='py-2 d-block'>
                    Privacy &amp; Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md'>
            <div className='ftco-footer-widget mb-4'>
              <h2 className='ftco-heading-2'>Have a Questions?</h2>
              <div className='block-23 mb-3'>
                <ul>
                  <li>
                    <span className='icon icon-map-marker'></span>
                    <span className='text'>
                      Bambhori Pr. Chandsar, Jalgaon, Maharashtra 425001
                    </span>
                  </li>
                  <li>
                    <Link>
                      <span className='icon icon-phone'></span>
                      <span className='text'>0257 225 8393</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className='icon icon-envelope'></span>
                      <span className='text'>contact@carbook.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | Group No. 2
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
