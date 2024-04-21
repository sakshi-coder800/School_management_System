import React from 'react'
import './Hero_Banner.css'
const Hero_Banner = () => {
  return (
    // <div>Hero_Banner</div>
    <>
      <section className="banner-area">
  <div className="single-banner container-fluid container-custom-1 p-0">

<img src="https://img.freepik.com/free-psd/cartoon-planet-illustration_23-2151114748.jpg"className="banner-top-shape-1"alt=""/>
<img src="https://img.freepik.com/free-psd/cartoon-planet-illustration_23-2151114748.jpg"className="banner-top-shape-2"alt=""/>
<img src="https://img.freepik.com/free-psd/cartoon-planet-illustration_23-2151114748.jpg"className="banner-top-shape-3"alt=""/>

    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-5 col-md-8">
          <div className="banner-content">
            <div className="section-area">
              <span className="section-subtitle">Online Learning Platform</span>
              <h1 className="section-title">Master The Skills
                Drive Your <span>Career. 
                    {/* <img src="https://img.freepik.com/free-vector/winner-background-first-place-competition_91128-1587.jpg" alt="" /> */}
                    </span></h1>
              <p className="section-text">Through a combination of lectures, readings, and discussions, students <br /> will gain a solid foundation in educational psychology.</p>
              <a href="#" className="theme-btn theme-btn-big">View All Course</a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7 d-none d-lg-block">
          <div className="banner-right">
            <div className="banner-img">
              <img src="https://img.freepik.com/free-photo/front-view-young-female-student-red-shirt-black-bag-with-black-earphones-listening-music-smiling-holding-copybook-white_140725-16645.jpg" alt="" />

              
            </div>
            <div className="banner-meta">
              <div className="banner-inner-meta banner-meta-info">
                {/* <img className="inner-img" src="assets/img/banner/1/info_icon.png" alt /> */}
              <img className='inner-img' src="https://img.freepik.com/free-vector/winner-background-first-place-competition_91128-1587.jpg" alt="" />

                <div className="banner-inner-info">
                  <div className="banner-info-img">
                   
                    <img src="https://st2.depositphotos.com/3889193/6554/i/450/depositphotos_65548041-Cute-student-girl-taking-notes.jpg" alt="" />
                    <span className="banner-info-icon"><i className="fa-solid fa-star" /></span>
                  </div>
                  <div className="banner-info-text">
                    <h5>Brian Cumin</h5>
                    <p>“Lorem ipsum dolorous rises various <br /> qualm quique id dam connecter easum <br /> commode impediment”.</p>
                  </div>
                </div>
              </div>
              <div className="banner-inner-meta banner-meta-rating">
                <span><i className="fa-solid fa-star" />4.5 (3.4k Reviews)</span>
                <h5>Congratulations</h5>
              </div>
            </div>
            <div className="banner-right-shape">
            
            

<img src="https://img.freepik.com/free-psd/cartoon-planet-illustration_23-2151114748.jpg"className="banner-shape-1"alt=""/>
                  <img
                    src="https://img.freepik.com/premium-vector/big-opaque-light-blue-sphere-with-shadow-white-background_444390-8651.jpg?w=740"
                    className="banner-shape-2"
                    alt=""
                  />
                  <img
                    src="https://img.freepik.com/premium-vector/big-opaque-light-blue-sphere-with-shadow-white-background_444390-8651.jpg?w=740"
                    className="banner-shape-3"
                    alt=""
                  />
                  <img
                    src="https://img.freepik.com/premium-vector/big-opaque-light-blue-sphere-with-shadow-white-background_444390-8651.jpg?w=740"
                    className="banner-shape-4"
                    alt=""
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default Hero_Banner;