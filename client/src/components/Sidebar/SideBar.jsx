import React from 'react'

const SideBar = () => {
  return (
    <>
    {/* // <div>SideBar</div> */}
    {/* // <!-- sidebar-information-area-start --> */}
    <div class="sidebar-info side-info">
        <div class="sidebar-logo-wrapper mb-25">
            <div class="row align-items-center">
                <div class="col-xl-6 col-8">
                    <div class="sidebar-logo">
                        <a href="index.html"><img src="assets/img/logo/logo-white.png" alt="logo-img" /></a>
                    </div>
                </div>
                <div class="col-xl-6 col-4">
                    <div class="sidebar-close-wrapper text-end">
                        <button class="sidebar-close side-info-close"><i class="fal fa-times"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-menu-wrapper fix">
            <div class="mobile-menu"></div>
        </div>
    </div>
    <div class="offcanvas-overlay"></div>
    {/* <!-- sidebar-information-area-end --> */}
    </>

  )
}

export default SideBar