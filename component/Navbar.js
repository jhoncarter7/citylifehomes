import React from 'react'
import classes from './Navbar.module.css'
function Navbar() {
  return (
    <nav className={classes.navcontainer}>
        <div>logo</div>
        <div className={classes.navoptions}>
            <p className={classes.home}>Home</p>
            <p>Our Offerings</p>
            <p>Our Team</p>
            <p>Contact Us</p>
            <p>Blogs</p>
        </div>
        <div className={classes.navbutton}>
            <button>Register Now</button>
        </div>
    </nav>
  )
}

export default Navbar