import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Upcoming_Events.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Upcoming_Events() {
  return (
    <>
  <section className="event-area">
    {/* <img src="https://st2.depositphotos.com/3889193/6554/i/450/depositphotos_65548041-Cute-student-girl-taking-notes.jpg" alt className="event-bg-img" /> */}
    {/* <img src="assets/img/event/1/bg.jpg" alt className="event-bg-img" /> */}
    <div className="event-wrap pt-120 pb-40">
      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="event-section-area mb-20">
              <div className="section-area">
                <span className="section-subtitle">Conference on Education</span>
                <h2 className="section-title mb-0">Upcoming Events</h2>
              </div>
            </div>
          </div>
          
        </div>
        <div className="event-active  pb-80">
         


          

      <Swiper
       pagination={true} spaceBetween={50} slidesPerView={3}
       modules={[Pagination]} className="mySwiper" onSwiper={(Swiper)=> console.log(Swiper)}>
        <SwiperSlide> 
        <div className="event-item">
                <div className="event-img">
                  <a href="event.html">
                    {/* <img src="assets/img/event/1/1.jpg" alt /> */}
                    <img src="https://st2.depositphotos.com/3889193/6554/i/450/depositphotos_65548041-Cute-student-girl-taking-notes.jpg" alt="" />
                    </a>
                </div>
                <div className="event-content">
                  <div className="event-content-meta">
                    <span><i className="fa-thin fa-location-dot" />London, US</span>
                    <span><i className="fa-thin fa-clock" />8.00 am - 6.00 pm</span>
                  </div>
                  <h5 className="event-content-title"><a href="event.html">These are Designed to Provide Hands Training and Skill-Building.</a></h5>
                  <a href="#" className="t-theme-btn theme-btn event-btn">Get Ticket</a>
                </div>
              </div></SwiperSlide>
              
        <SwiperSlide> 
        <div className="event-item">
                <div className="event-img">
                  <a href="event.html">
                    {/* <img src="assets/img/event/1/1.jpg" alt /> */}
                    <img src="https://st2.depositphotos.com/3889193/6554/i/450/depositphotos_65548041-Cute-student-girl-taking-notes.jpg" alt="" />
                    </a>
                </div>
                <div className="event-content">
                  <div className="event-content-meta">
                    <span><i className="fa-thin fa-location-dot" />London, US</span>
                    <span><i className="fa-thin fa-clock" />8.00 am - 6.00 pm</span>
                  </div>
                  <h5 className="event-content-title"><a href="event.html">These are Designed to Provide Hands Training and Skill-Building.</a></h5>
                  <a href="#" className="t-theme-btn theme-btn event-btn">Get Ticket</a>
                </div>
              </div></SwiperSlide>
              
        <SwiperSlide> 
        <div className="event-item">
                <div className="event-img">
                  <a href="event.html">
                    {/* <img src="assets/img/event/1/1.jpg" alt /> */}
                    <img src="https://st2.depositphotos.com/3889193/6554/i/450/depositphotos_65548041-Cute-student-girl-taking-notes.jpg" alt="" />
                    </a>
                </div>
                <div className="event-content">
                  <div className="event-content-meta">
                    <span><i className="fa-thin fa-location-dot" />London, US</span>
                    <span><i className="fa-thin fa-clock" />8.00 am - 6.00 pm</span>
                  </div>
                  <h5 className="event-content-title"><a href="event.html">These are Designed to Provide Hands Training and Skill-Building.</a></h5>
                  <a href="#" className="t-theme-btn theme-btn event-btn">Get Ticket</a>
                </div>
              </div></SwiperSlide>
              
        <SwiperSlide> 
        <div className="event-item">
                <div className="event-img">
                  <a href="event.html">
                    {/* <img src="assets/img/event/1/1.jpg" alt /> */}
                    <img src="https://st2.depositphotos.com/3889193/6554/i/450/depositphotos_65548041-Cute-student-girl-taking-notes.jpg" alt="" />
                    </a>
                </div>
                <div className="event-content">
                  <div className="event-content-meta">
                    <span><i className="fa-thin fa-location-dot" />London, US</span>
                    <span><i className="fa-thin fa-clock" />8.00 am - 6.00 pm</span>
                  </div>
                  <h5 className="event-content-title"><a href="event.html">These are Designed to Provide Hands Training and Skill-Building.</a></h5>
                  <a href="#" className="t-theme-btn theme-btn event-btn">Get Ticket</a>
                </div>
              </div></SwiperSlide>
              
        <SwiperSlide> 
        <div className="event-item">
                <div className="event-img">
                  <a href="event.html">
                    {/* <img src="assets/img/event/1/1.jpg" alt /> */}
                    <img src="https://st2.depositphotos.com/3889193/6554/i/450/depositphotos_65548041-Cute-student-girl-taking-notes.jpg" alt="" />
                    </a>
                </div>
                <div className="event-content">
                  <div className="event-content-meta">
                    <span><i className="fa-thin fa-location-dot" />London, US</span>
                    <span><i className="fa-thin fa-clock" />8.00 am - 6.00 pm</span>
                  </div>
                  <h5 className="event-content-title"><a href="event.html">These are Designed to Provide Hands Training and Skill-Building.</a></h5>
                  <a href="#" className="t-theme-btn theme-btn event-btn">Get Ticket</a>
                </div>
              </div></SwiperSlide>
              
              
              </Swiper>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}
