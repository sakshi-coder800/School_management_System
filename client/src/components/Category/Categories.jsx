import "./Categories.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';


// import required modules
import { Pagination ,Navigation } from "swiper/modules";
const Categories = () => {
  return (
    // <div>Categories</div>
    <>
      <section className="category-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="category-left pb-60">
                <div className="section-area">
                  <span className="section-subtitle">Browse Categories</span>
                  <h2 className="section-title mb-20">Popular Categories</h2>
                </div>
              
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="category-wrap">
                <div className="category-shape">
                  <img
                    src="https://img.freepik.com/free-psd/cartoon-planet-illustration_23-2151114748.jpg"
                    className="category-shape-1"
                    alt=""
                  />
                  <img
                    src="https://img.freepik.com/premium-vector/big-opaque-light-blue-sphere-with-shadow-white-background_444390-8651.jpg?w=740"
                    className="category-shape-2"
                    alt=""
                  />
                  <img
                    src="https://img.freepik.com/premium-vector/big-opaque-light-blue-sphere-with-shadow-white-background_444390-8651.jpg?w=740"
                    className="category-shape-3"
                    alt=""
                  />
                  <img
                    src="https://img.freepik.com/premium-vector/big-opaque-light-blue-sphere-with-shadow-white-background_444390-8651.jpg?w=740"
                    className="category-shape-4"
                    alt=""
                  />
                </div>

                <div className="category-active  pb-60">
                  <Swiper
                  
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
                    // pagination={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    // modules={[Pagination]}
                    modules={[Navigation]}
                    className="mySwiper"
                    onSwiper={(Swiper) => console.log(Swiper)}
                  >
                    <SwiperSlide>
                      <div className="category-item">
                        <div className="category-img">
                          <img
                            src="https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148100984.jpg?size=626&ext=jpg
            "
                            alt
                          />
                        </div>
                        <div className="category-content">
                          <h5>
                            <a href="course.html">Digital Marketing</a>
                          </h5>
                          <p>
                            <a href="course.html">
                              26 Items
                              <i className="fa-light fa-arrow-right" />
                              <i className="fa-light fa-arrow-right" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="category-item">
                        <div className="category-img">
                          <img
                            src="https://img.freepik.com/free-vector/modern-business-concept-with-rocket_23-2147788676.jpg"
                            alt
                          />
                        </div>
                        <div className="category-content">
                          <h5>
                            <a href="course.html">Digital Marketing</a>
                          </h5>
                          <p>
                            <a href="course.html">
                              26 Items
                              <i className="fa-light fa-arrow-right" />
                              <i className="fa-light fa-arrow-right" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="category-item">
                        <div className="category-img">
                          <img
                            src="https://img.freepik.com/free-photo/full-length-portrait-happy-jumping-man-isolated-yellow-background-caucasian-male-model-casual-clothes_155003-27411.jpg"
                            alt
                          />
                        </div>
                        <div className="category-content">
                          <h5>
                            <a href="course.html">Digital Marketing</a>
                          </h5>
                          <p>
                            <a href="course.html">
                              26 Items
                              <i className="fa-light fa-arrow-right" />
                              <i className="fa-light fa-arrow-right" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="category-item">
                        <div className="category-img">
                          <img
                            src="https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148100984.jpg?size=626&ext=jpg
            "
                            alt
                          />
                        </div>
                        <div className="category-content">
                          <h5>
                            <a href="course.html">Digital Marketing</a>
                          </h5>
                          <p>
                            <a href="course.html">
                              26 Items
                              <i className="fa-light fa-arrow-right" />
                              <i className="fa-light fa-arrow-right" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="category-item">
                        <div className="category-img">
                          <img
                            src="https://img.freepik.com/free-vector/modern-business-concept-with-rocket_23-2147788676.jpg"
                            alt
                          />
                        </div>
                        <div className="category-content">
                          <h5>
                            <a href="course.html">Digital Marketing</a>
                          </h5>
                          <p>
                            <a href="course.html">
                              26 Items
                              <i className="fa-light fa-arrow-right" />
                              <i className="fa-light fa-arrow-right" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="category-item">
                        <div className="category-img">
                          <img
                            src="https://img.freepik.com/free-photo/full-length-portrait-happy-jumping-man-isolated-yellow-background-caucasian-male-model-casual-clothes_155003-27411.jpg"
                            alt
                          />
                        </div>
                        <div className="category-content">
                          <h5>
                            <a href="course.html">Digital Marketing</a>
                          </h5>
                          <p>
                            <a href="course.html">
                              26 Items
                              <i className="fa-light fa-arrow-right" />
                              <i className="fa-light fa-arrow-right" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
