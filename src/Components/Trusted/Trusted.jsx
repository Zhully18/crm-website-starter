import React from 'react'
import './Trusted.css'
import netflix from '../Asset/netflix_logo.png'
import stripe from '../Asset/stripe.png'
import yahoo from '../Asset/yahoo.png'
import facebook from '../Asset/fb logo.png'
import zapier from '../Asset/zapier_logo.png'

const Trusted = () => {
  return (
    <div>
        <div className="trusted">
            <div className="trustes_header">
                <h3>Trusted Partners</h3>
            </div>
            <div className="trusted_partners">
                <img src={netflix} alt="partner_img" className="partner_img" />
                <img src={stripe} alt="partner_img" className="partner_img" />
                <img src={yahoo} alt="partner_img" className="partner_img" />
                <img src={facebook} alt="partner_img" className="partner_img" />
                <img src={zapier} alt="partner_img" className="partner_img" />
            </div>
        </div>
    </div>
  )
}

export default Trusted