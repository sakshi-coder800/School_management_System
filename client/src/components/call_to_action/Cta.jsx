import React from 'react'
import './Cta.css'
const Cta = () => {
  return (
    // <div>Cta</div>
    <>
    
    {/* cta area start */}
<div className="cta-area">
  <div className="container">
    <div className="cta-wrapper">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="cta-content mb-30 mb-lg-0">
            <span className="cta-subtitle">Download App</span>
            <h2 className="cta-title">Are you Ready to Start your
              Online Course?</h2>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="cta-button">
            <a href="#" className="cta-btn"><i className="fa-brands fa-apple" />Apple Store</a>
            <a href="#" className="cta-btn"><i className="fa-brands fa-google-play" />Play Store</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* cta area end */}

    </>
  )
}

export default Cta