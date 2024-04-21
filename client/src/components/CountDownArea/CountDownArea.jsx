import React from 'react'
import './CountDownArea.css'
const CountDownArea = () => {
  return (
    // <div>CountDownArea</div>
    <>
    {/* counter area start */}
<div className="counter-area">
  <div className="container">
    <div className="counter-wrap">
      <div className="row g-0">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item">
            <div className="counter-icon">
              <i class="fa-solid fa-earth-americas"></i>
            </div>
            <div className="counter-info">
              <h3 className="counter-info-title">
                <span className="odometer count_one" data-count={34}>00</span>
                <span>k</span>
              </h3>
              <span className="counter-info-text">Foreign Followers</span>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item">
            <div className="counter-icon">
              <i className="fa-solid fa-book-open" />
            </div>
            <div className="counter-info">
              <h3 className="counter-info-title">
                <span className="odometer count_one" data-count={12}>00</span>
                <span>k</span>
              </h3>
              <span className="counter-info-text">Classes complete</span>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item">
            <div className="counter-icon">
              <i className="fa-solid fa-user-group" />
            </div>
            <div className="counter-info">
              <h3 className="counter-info-title">
                <span className="odometer count_one" data-count={214}>00</span>
                <span>k</span>
              </h3>
              <span className="counter-info-text">Students Enrolled</span>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item">
            <div className="counter-icon">
              <i className="fa-solid fa-medal" />
            </div>
            <div className="counter-info">
              <h3 className="counter-info-title">
                <span className="odometer count_one" data-count={56}>00</span>
                <span>k</span>
              </h3>
              <span className="counter-info-text">Certified teachers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* counter area end */}

    </>
  )
}

export default CountDownArea;