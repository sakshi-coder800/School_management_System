import React from "react";
import './Footer.css'
const footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-7 col-md-7 col-sm-12">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur est earum illum alias voluptas{" "}
                </p>
                <div className="footer-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
              </div>
              <div className="col-xl-3 col-lg-7 col-md-7 col-sm-12">
              <h5 className="footer-title">Useful Link</h5>
                  <div className="footer-list">
                    <ul>
                      <li><a href="">About Eduan</a></li>
                      <li><a href="">Contact</a></li>
                      <li><a href="">Help Centre</a></li>
                      <li><a href="">Refund</a></li>
                      <li><a href="">Conditions</a></li>
                      <li><a href="">Privacy Policy</a></li>
                    </ul>
                  </div>
              
              </div>

              <div className="col-xl-3 col-lg-7 col-md-7 col-sm-12">
              <h5 className="footer-title">Categories</h5>
                  <div className="footer-list">
                    <ul>
                      <li><a href="">Design Skills</a></li>
                      <li><a href="">Development</a></li>
                      <li><a href="">Marketing</a></li>
                      <li><a href="">Finance & Accounting</a></li>
                      <li><a href="">IT & Software</a></li>
                      <li><a href="">Sales Marketing</a></li>
                      <li><a href="">Conditions</a></li>
                      <li><a href="">Privacy Policy</a></li>
                    </ul>
                  </div>
              </div>


             
              <div className="col-xl-3 col-lg-7 col-md-7 col-sm-12">
              <h5 className="footer-title">Newsletter</h5>
                  <p className="footer-text  newsletter-text">
                    Sign up foe our newsletter and get 34% <br /> off your next
                    course.
                  </p>
              <form action="#">
                    <div className="footer-subscribe-form">
                      <input type="email" placeholder="Enter Your Email*" />
                      <button type="submit">Subscribe</button>
                    </div>
                  
                  </form>
              </div>
                

             
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="row">
            <div className="col-12">
              <div className="copyright-text">
                <p>Copyright &copy; 2024 All Rights Reserved By Sakshi </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
