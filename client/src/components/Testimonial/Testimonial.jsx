import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonial.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Testimonial() {
  return (
    <>
<section className="testimonial-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-10">
          <div className="section-area mb-55 section-area-top text-center">
            <span className="section-subtitle">Student Reviews</span>
            <h2 className="section-title mb-20">What Our Students Saying</h2>
            <p className="section-text">
              Through a combination of lectures, readings, discussions, students will gain a solid foundation in educational psychology.
            </p>
          </div>
        </div>
      </div>
    </div>





      <Swiper
       pagination={true} spaceBetween={50} slidesPerView={3}
       modules={[Pagination]} className="mySwiper" onSwiper={(Swiper)=> console.log(Swiper)}>
        <SwiperSlide> <div className="testimonial-item">
              <div className="testimonial-top">
                <div className="testimonial-admin">
                  <div className="testimonial-admin-img">
                    {/* <img src="assets/img/testimonial/1/admin-1.jpg" alt /> */}
                    <img src="https://st2.depositphotos.com/3889193/6554/i/450/depositphotos_65548041-Cute-student-girl-taking-notes.jpg" alt="" />
                  </div>
                  <div className="testimonial-admin-info">
                    <h5>Brian Cumin</h5>
                    <span>Indigo Violet</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  <ul>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  “Lorem ipsum dolorArcu risus quis varius quam quisque id diam. mauris consectetur adipiscing elit, sed do eiusm commodo imperdiet”.
                </p>
              </div>
            </div></SwiperSlide>
       
            <SwiperSlide> <div className="testimonial-item">
              <div className="testimonial-top">
                <div className="testimonial-admin">
                  <div className="testimonial-admin-img">
                    {/* <img src="assets/img/testimonial/1/admin-1.jpg" alt /> */}
                    <img src="https://st2.depositphotos.com/3889193/6554/i/450/depositphotos_65548041-Cute-student-girl-taking-notes.jpg" alt="" />
                  </div>
                  <div className="testimonial-admin-info">
                    <h5>Brian Cumin</h5>
                    <span>Indigo Violet</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  <ul>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  “Lorem ipsum dolorArcu risus quis varius quam quisque id diam. mauris consectetur adipiscing elit, sed do eiusm commodo imperdiet”.
                </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="testimonial-item">
              <div className="testimonial-top">
                <div className="testimonial-admin">
                  <div className="testimonial-admin-img">
                    {/* <img src="assets/img/testimonial/1/admin-1.jpg" alt /> */}
                    <img src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg" alt="" />
                  </div>
                  <div className="testimonial-admin-info">
                    <h5>Brian Cumin</h5>
                    <span>Indigo Violet</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  <ul>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  “Lorem ipsum dolorArcu risus quis varius quam quisque id diam. mauris consectetur adipiscing elit, sed do eiusm commodo imperdiet”.
                </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="testimonial-item">
              <div className="testimonial-top">
                <div className="testimonial-admin">
                  <div className="testimonial-admin-img">
                    {/* <img src="assets/img/testimonial/1/admin-1.jpg" alt /> */}
                    <img src="https://st2.depositphotos.com/3889193/6554/i/450/depositphotos_65548041-Cute-student-girl-taking-notes.jpg" alt="" />
                  </div>
                  <div className="testimonial-admin-info">
                    <h5>Brian Cumin</h5>
                    <span>Indigo Violet</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  <ul>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  “Lorem ipsum dolorArcu risus quis varius quam quisque id diam. mauris consectetur adipiscing elit, sed do eiusm commodo imperdiet”.
                </p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="testimonial-item">
              <div className="testimonial-top">
                <div className="testimonial-admin">
                  <div className="testimonial-admin-img">
                    {/* <img src="assets/img/testimonial/1/admin-1.jpg" alt /> */}
                    <img src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg" alt="" />
                  </div>
                  <div className="testimonial-admin-info">
                    <h5>Brian Cumin</h5>
                    <span>Indigo Violet</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  <ul>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                    <li><i className="fa-solid fa-star" /></li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  “Lorem ipsum dolorArcu risus quis varius quam quisque id diam. mauris consectetur adipiscing elit, sed do eiusm commodo imperdiet”.
                </p>
              </div>
            </div></SwiperSlide>
      </Swiper>

      </section>

    </>
  );
}
