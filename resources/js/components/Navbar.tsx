import React from 'react'
import './index.css'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="nav-bar">
        <h2 className='nav-title'>Medication Servay</h2>
        <p className='nav-count'>Record Count</p>
    </div>
  )
}

export default Navbar