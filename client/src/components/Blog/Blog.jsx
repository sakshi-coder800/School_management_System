import React from 'react'
import './Blog.css'
const Blog = () => {
  return (
    // <div>Blog</div>
    <>
      {/* blog area start */}
  <section className="blog-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-10">
          <div className="testimonial-section-area text-center">
            <div className="section-area  section-area-top">
              <span className="section-subtitle">Our Blog</span>
              <h2 className="section-title">Our Latest Articles</h2>
              <p className="section-text">
                Through a combination of lectures, readings, discussions, students will gain a solid foundation in educational psychology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-8">
          <div className="blog-wrap">
            <div className="blog-item blog-item-h">
              <div className="blog-img">
                <a href="blog-details.html">
                    {/* <img src="assets/img/blog/1/blog-1.jpg" alt /> */}
                    <img src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg" alt="" />
                    </a>
              </div>
              <div className="blog-content">
                <div className="blog-content-meta">
                  <span><i className="fa-thin fa-user" />Admin</span>
                  <span><i className="fa-thin fa-clock" />March 23, 2023</span>
                </div>
                <h5 className="blog-content-title"><a href="blog-details.html">Education Week News and Views on Education Policy and Practice.</a></h5>
                <a href="#" className="theme-btn blog-btn t-theme-btn">Read More</a>
              </div>
            </div>
            <div className="blog-item blog-item-h">
              <div className="blog-img">
                <a href="blog-details.html">
                    {/* <img src="assets/img/blog/1/blog-2.jpg" alt /> */}
                    <img src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg" alt="" />
                    </a>
              </div>
              <div className="blog-content">
                <div className="blog-content-meta">
                  <span><i className="fa-thin fa-user" />Admin</span>
                  <span><i className="fa-thin fa-clock" />April 23, 2023</span>
                </div>
                <h5 className="blog-content-title"><a href="blog-details.html">The Learning Network Teaching and Learning With The New York Times.</a></h5>
                <a href="#" className="theme-btn blog-btn t-theme-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4">
          <div className="blog-item blog-item-v">
            <div className="blog-img">
              <a href="blog-details.html">
                {/* <img src="assets/img/blog/1/blog-3.jpg" alt /> */}
                <img src="https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg" alt="" />
              </a>
            </div>
            <div className="blog-content">
              <div className="blog-content-meta">
                <span><i className="fa-thin fa-user" />Admin</span>
                <span><i className="fa-thin fa-clock" />June 23, 2023</span>
              </div>
              <h5 className="blog-content-title"><a href="blog-details.html">Only One Thing Impossible For God Find Sense in Any.</a></h5>
              <a href="#" className="theme-btn blog-btn t-theme-btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </section>
  {/* blog area end */}
    </>
  )
}

export default Blog