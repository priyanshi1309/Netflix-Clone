import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={assets.youtube_icon} alt="youtube-icon" />
        <img src={assets.instagram_icon} alt="instagram-icon" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.facebook_icon} alt="" />
      </div>
      <ul>
        {assets.footer.map((item,index) => {
          return(
            <li key={index}>{item}</li>
          )
        })}
      </ul>
      <p className="copyright-text">
        Netflix India
      </p>
    </div>
  )
}

export default Footer