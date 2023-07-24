import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center text-md-start">
                    <a href="#"><img src="./images/fb.svg" alt="" /></a>
                    <a href="#"><img src="./images/insta.svg" alt="" /></a>
                    <a href="#"><img src="./images/twitter.svg" alt="" /></a>
                    <a href="#"><img src="./images/pinterest.svg" alt="" /></a>
                    <a href="#"><img src="./images/tiktok.svg" alt="" /></a>
                    <a href="#"><img src="./images/whatsapp.svg" alt="" /></a>
                    <a href="#"><img src="./images/youtube.svg" alt="" /></a>
                </div>
                <div className="col-12 col-md-6 pt-3 pt-md-0 text-center text-md-start">
                    <p className='m-0 text-center text-md-start'>© Start, 2022. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer