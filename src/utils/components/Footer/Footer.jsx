import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'
const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="container">
            <div className="f-container">
                <span className="title">Get Funded Today!</span>
                <EmailBox/>

                <hr/>
                <div className="f-menu">
                    <span>HOME</span>
                    <span>WHAT WE DO</span>
                    <span>HOW IT WORKS</span>
                    <span>WHO WE INVEST IN </span>
                    <span>TESTIMONIALS</span>
                </div>
                <hr/>
                <span className="text">Made By DIVYANSH KUMAR SAHOO</span>
            </div>
        </div>
    </div>
  )
}

export default Footer