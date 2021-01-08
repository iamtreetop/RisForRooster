import React from 'react'

import './banner.styles.scss';

const Banner = () => {
  const bannerUrl = "https://i.etsystatic.com/isbl/32ecfc/43804347/isbl_3360x840.43804347_c0tggg8r.jpg?version=0"
  return (
    <div className="banner-container">
      <img src={bannerUrl} className="banner" alt="" />
    </div>
  )
};

export default Banner;