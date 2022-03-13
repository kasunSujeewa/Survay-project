import React from 'react'
import { FaQuestionCircle,FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="footer">
        For collect research data <span>2022</span>
        <div className="social-icons">
        <FaFacebook/> <FaTwitter/><FaInstagram/>
        </div>
    </div>
  )
}

export default Footer