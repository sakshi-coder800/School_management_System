// Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* header area start */}
      <header>
        <div className="header-area header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 col-md-6 col-6">
                <div className="header-left">
                  <div className="header-logo">
                    <a href="#">LOGO</a>
                  </div>
                  <nav class="main-menu mobile-menu  d-xl-block" id="mobile-menu">
                    <ul>
                      <li class="menu-has-child">
                        <a href="">Home</a>
                        <ul class="submenu">
                          <li><a href="">Education Main</a></li>
                          <li><a href="">Online Education</a></li>
                          <li><a href="">Classic LMS</a></li>
                          <li><a href="">Elearning Education</a></li>
                          <li><a href="">College Status</a></li>
                          <li><a href="">University Campus</a></li>
                          <li><a href="">Academic Education</a></li>
                          <li><a href="">Online Courses</a></li>
                          <li><a href="">Kids Education</a></li>
                          <li><a href="l">Preschool Program</a></li>
                        </ul>
                      </li>
                      <li class="menu-has-child">
                        <a href="">Courses</a>
                        <ul class="submenu">
                          <li><a href="">Courses 1</a></li>
                          <li><a href="">Courses 2</a></li>
                          <li><a href="">Course Details</a></li>
                        </ul>
                      </li>
                      <li class="menu-has-child">
                        <a href="#">Pages</a>
                        <ul class="submenu">
                          <li><a href="">About</a></li>
                          <li><a href="">Teacher</a></li>
                          <li><a href="">Teacher Details</a></li>
                          <li><a href="">Events</a></li>
                          <li><a href="">Event Details</a></li>
                          <li><a href="">Price</a></li>
                          <li><a href="">Gallery</a></li>
                          <li><a href="">Sign Up</a></li>
                          <li><a href="">Sign In</a></li>
                          <li><a href="">404</a></li>
                        </ul>
                      </li>
                      <li class="menu-has-child">
                        <a href="">Blog</a>
                        <ul class="submenu">
                          <li><a href="">Blog</a></li>
                          <li><a href="">Blog Details</a></li>
                        </ul>
                      </li>
                      <li ><a href="">Contact</a></li>
                    </ul>
                  </nav>

                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-6 col-6">
                <div className="header-right ">
                  <div className="header-search d-none d-lg-block">
                    <form action="#">
                      <input type="text" placeholder="Search Item" />
                      <button type="submit" class="header-search-btn"><i class="fa-thin fa-magnifying-glass"></i></button>
                    </form>
                  </div>
                  <div className="header-btn d-none d-sm-block">
                  <a href="#" class="header-btn theme-btn theme-btn-medium d-none d-lg-block">Enroll Now</a>
                  </div>
                  <div className="header-menu-bar d-xl-none ml-10" onClick={toggleMenu}>
                    <span className="header-menu-bar-icon side-toggle">
                      <i className="fa-solid fa-bars"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Side Menu */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
      <nav class="main-menu-mobile mobile-menu  d-xl-block" id="mobile-menu">
                    <ul>
                      <li class="menu-has-child">
                        <a href="">Home</a>
                        <ul class="submenu">
                          <li><a href="">Education Main</a></li>
                          <li><a href="">Online Education</a></li>
                          <li><a href="">Classic LMS</a></li>
                          <li><a href="">Elearning Education</a></li>
                          <li><a href="">College Status</a></li>
                          <li><a href="">University Campus</a></li>
                          <li><a href="">Academic Education</a></li>
                          <li><a href="">Online Courses</a></li>
                          <li><a href="">Kids Education</a></li>
                          <li><a href="l">Preschool Program</a></li>
                        </ul>
                      </li>
                      <li class="menu-has-child">
                        <a href="">Courses</a>
                        <ul class="submenu">
                          <li><a href="">Courses 1</a></li>
                          <li><a href="">Courses 2</a></li>
                          <li><a href="">Course Details</a></li>
                        </ul>
                      </li>
                      <li class="menu-has-child">
                        <a href="#">Pages</a>
                        <ul class="submenu">
                          <li><a href="">About</a></li>
                          <li><a href="">Teacher</a></li>
                          <li><a href="">Teacher Details</a></li>
                          <li><a href="">Events</a></li>
                          <li><a href="">Event Details</a></li>
                          <li><a href="">Price</a></li>
                          <li><a href="">Gallery</a></li>
                          <li><a href="">Sign Up</a></li>
                          <li><a href="">Sign In</a></li>
                          <li><a href="">404</a></li>
                        </ul>
                      </li>
                      <li class="menu-has-child">
                        <a href="">Blog</a>
                        <ul class="submenu">
                          <li><a href="">Blog</a></li>
                          <li><a href="">Blog Details</a></li>
                        </ul>
                      </li>
                      <li class="menu-has-child">
                        <a href="">Contact</a>
                      </li>
                    </ul>
                  </nav>

      </div>
    </>
  );
};

export default Header;
