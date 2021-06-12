'use strict';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarLogo from './assets/NavbarLogo.png';
import Hero1Image from './assets/Hero1Image.png';
import Hero1ImageOverlay from './assets/Hero1ImageOverlay.png';
import Hero2Header from './assets/Hero2Header.png';
import Hero2Coloured from './assets/Hero2Coloured.png';
import Hero2Uncoloured from './assets/Hero2Uncoloured.png';
import Hero315 from './assets/Hero315.png';
import Hero324 from './assets/Hero324.png';
import Hero33 from './assets/Hero33.png';
import Hero4Header from './assets/Hero4Header.png';
import Hero4DisplayPicture from './assets/Hero4DisplayPicture.jpg';
import LeftImage from './assets/LeftImage.png';
import Hero6Placeholder from './assets/placeholder.png';
import FooterLogo from './assets/FooterLogo.png';
import FacebookIcon from './assets/FacebookIcon.png';
import LinkedInIcon from './assets/LinkedInIcon.png';
import InstagramIcon from './assets/InstagramIcon.png';

function Header() {
  return (
    <>
      <nav className='navbar navbar-expand-md navbar-light'>
        <div className='container'>
          <a href='/' className='navbar-brand'>
            <div className='d-flex justify-content-between align-items-center'>
              <img className='navbar-logo' src={NavbarLogo} />
              <span className='fs-1 fw-bold ms-2 mb-3'>organic</span>
            </div>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbar-menu'
            aria-controls='navbar-menu'
            aria-expanded='false'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbar-menu'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Link
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Blog
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About Us
                </a>
              </li>
            </ul>
            <button className='btn navbar-button'>Contact</button>
          </div>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className='footer container-fluid mt-5'>
        <div className='footer-content row d-flex justify-content-center align-items-center'>
          <div className='col-12 col-md-5 text-center'>
            <img src={FooterLogo} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor
              <span className='separator ms-auto me-auto'></span>
              &copy; Copyright 2020 Nature
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <h3>Information</h3>
            <span className='separator'></span>
            <div className='d-flex flex-column flex-wrap lh-lg'>
              <a className='footer-nav-link' href='#'>
                About Us
              </a>
              <a className='footer-nav-link' href='#'>
                Products
              </a>
              <a className='footer-nav-link' href='#'>
                Contact Us
              </a>
              <a className='footer-nav-link' href='#'>
                Terms of Service
              </a>
            </div>
          </div>
          <div className='col-12 col-md-3'>
            <h3>Follow Us</h3>
            <span className='separator'></span>
            <div className='d-flex flex-wrap lh-lg'>
              <img className='me-2' src={FacebookIcon} />
              <img className='me-2' src={LinkedInIcon} />
              <img src={InstagramIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <div className='container-fluid'>
          <div className='row hero-1'>
            <div className='col-12 col-sm-6 hero-1-left'>
              <p>
                <span className='fs-4'>Healthy life with</span>
                <br />
                <span className='fs-2 fw-bold'>Nature Organic</span>
                <br />
                <br />
                Vegetables are the edible parts of a plant that is used in
                cooking or can be eaten now.
              </p>
              <button className='btn hero-1-button'>Explore Now</button>
            </div>
            <div className='col-12 col-sm-6 hero-1-right position-relative d-flex justify-content-center align-items-center'>
              <img className='hero-1-image' src={Hero1Image} />
              <img
                className='hero-1-image-overlay position-absolute top-40 start-0'
                src={Hero1ImageOverlay}
              />
            </div>
          </div>
          <div className='row hero-2 mt-5 text-center'>
            <div className='col-12 hero-2-top d-flex flex-column align-items-center'>
              <img src={Hero2Header} width='50' />
              <h2>Welcome to Nature</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='col-12 row hero-2-bottom d-flex justify-content-evenly'>
              <div className='col-12 col-sm-2 col-md-3 mt-2'>
                <img className='hero-2-container' src={Hero2Uncoloured} />
              </div>
              <div className='col-12 col-sm-2 col-md-3 mt-2'>
                <img className='hero-2-container' src={Hero2Coloured} />
              </div>
              <div className='col-12 col-sm-2 col-md-3 mt-2'>
                <img className='hero-2-container' src={Hero2Uncoloured} />
              </div>
              <div className='col-12 col-sm-2 col-md-3 mt-2'>
                <img className='hero-2-container' src={Hero2Uncoloured} />
              </div>
            </div>
          </div>
          <div className='row hero-3 mt-3 text-center'>
            <div className='col-12 hero-3-top d-flex flex-column align-items-center'>
              <h2>Proudly presented by</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='col-12 row hero-3-bottom d-flex justify-content-evenly'>
              <div className='col-12 col-sm-4 col-md-2'>
                <img className='hero-3-container' src={Hero315} />
              </div>
              <div className='col-12 col-sm-4 col-md-2'>
                <img className='hero-3-container' src={Hero324} />
              </div>
              <div className='col-12 col-sm-4 col-md-2'>
                <img className='hero-3-container' src={Hero33} />
              </div>
              <div className='col-12 col-sm-6 col-md-2'>
                <img className='hero-3-container' src={Hero324} />
              </div>
              <div className='col-12 col-sm-6 col-md-2'>
                <img className='hero-3-container' src={Hero315} />
              </div>
            </div>
          </div>
          <div className='container-fluid hero-45'>
            <img className='left-image' src={LeftImage} />
            <div className='row hero-4 mt-3 text-center'>
              <div className='col-12 hero-4-top d-flex flex-column align-items-center'>
                <img src={Hero4Header} />
                <img
                  className='hero-4-display-picture'
                  src={Hero4DisplayPicture}
                />
                <p>
                  <span className='fs-3'>Jane Doe</span>
                  <br />
                  <span className='lh-lg'>
                    Thank you for all the amazing produce and products you
                    deliver each week... you make my life so easy and bring
                    goodness into our family eating. I've been roasting a lot of
                    brussel sprouts and
                  </span>
                </p>
                <div className='d-flex'>
                  <div className='hero-4-pages hero-4-pages-filled'></div>
                  <div className='hero-4-pages'></div>
                  <div className='hero-4-pages'></div>
                  <div className='hero-4-pages'></div>
                </div>
              </div>
            </div>
            <div className='row hero-5 text-center'>
              <div className='col-12 hero-5-top d-flex flex-column align-items-center'>
                <h2>Subscribe to Our Newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doeiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='row text-center'>
                  <div className='col-auto mt-3 ms-auto me-auto'>
                    <input
                      className='form-control'
                      type='email'
                      placeholder='Enter your email address'
                    />
                  </div>
                  <div className='col-auto mt-3 ms-auto me-auto'>
                    <button className='btn hero-5-button'>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row hero-6 text-center'>
            <div className='col-12 hero-6-top d-flex flex-column align-items-center'>
              <img src={Hero2Header} width='50' />
              <h2>Read Our Blog</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='col-12 row hero-6-bottom d-flex justify-content-center align-items-center text-center'>
              <div className='col-12 col-sm-6 col-md-4'>
                <div className='card'>
                  <img src={Hero6Placeholder} className='card-img-top' />
                  <div className='card-body'>
                    <h5 className='card-title'>Blog Post One</h5>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed doeiusmod
                    </p>
                    <a className='hero-6-card-link' href=''>
                      Read More
                      <span className='hero-6-card-link-underline'></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-4'>
                <div className='card'>
                  <img src={Hero6Placeholder} className='card-img-top' />
                  <div className='card-body'>
                    <h5 className='card-title'>Blog Post One</h5>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed doeiusmod
                    </p>
                    <a className='hero-6-card-link' href=''>
                      Read More
                      <span className='hero-6-card-link-underline'></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-4'>
                <div className='card'>
                  <img src={Hero6Placeholder} className='card-img-top' />
                  <div className='card-body'>
                    <h5 className='card-title'>Blog Post One</h5>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed doeiusmod
                    </p>
                    <a className='hero-6-card-link' href=''>
                      Read More
                      <span className='hero-6-card-link-underline'></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
