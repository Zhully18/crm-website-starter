import React from 'react'
import './Footer.css'
import facebook from '../Asset/facebook_icon.png'
import twitter from '../Asset/twitter_icon.png'
import linkedin from '../Asset/linkedin_icon.png'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="footer_content">
                <div className="content_left">
                    <h2>CANTAR</h2>
                    <p>CRM Solutions is dedicated to helping businesses manage their customer relationships and grow efficiently with our comprehensive CRM software.</p>
                    <div className="footer_icons">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className="content_center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Service</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="content_right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>Phone: (123) 456-7890</li>
                        <li>Email: support@crm-solutions.com</li>
                        <li>Address: 123 Business St, Suite 100, City, State</li>
                    </ul>
                </div>
            </div>
            <hr />
        <p className="footer_copy">Copyright 2024 @Company. All right Reserved</p>
        </div>
    </div>
  )
}

export default Footer