import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div class="logo">
        <div class="logo-inner">
          <Link to="../">
            <div class="label-logo on-hover--40 text-color-white">
            </div>
          </Link>
        </div>
      </div>

      <div class="top-bottom-margin animate">   </div>
    </div>
  )
}

export default Navbar
