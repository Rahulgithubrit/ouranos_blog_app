import React, { useState } from 'react'
import logo from './assets/logo.png'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";


function Navbar() {
    const [nav, setnav] = useState(true);
    const handleToggle = () => {
        setnav(!nav);
    }
    return (<>
        <div className={styles.container1 } >
            <header>
                <img className={styles.logo} src={logo} alt='logo' />
                <nav>
                    <ul className={styles.nav_links}>
                        <li><NavLink to={'/blog'}>Home</NavLink></li>
                        <li><NavLink to={'/blog'}>Product</NavLink></li>
                        <li><NavLink to={'/blog'}>About Us</NavLink></li>
                        <li><NavLink to={'/blog'}>Support</NavLink></li>
                        <li><NavLink to={'/blog'}>Blog</NavLink> </li>
                    </ul>
                </nav>
                <a className={styles.cta} href='/'><button>Buy now</button></a>
                <div className={styles.toggle_icon} onClick={handleToggle} >
                    {nav ? <FiAlignJustify size="28" className={styles.icons} /> : <FiX size="28" className={styles.icons_x} />}
                </div>


            </header>
            <p className={styles.heading_tag}>Transforming Agriculture with Technology</p>
            <p className={styles.subheading_tag}>Revolutionizing Agriculture through Innovation: Explore the Latest Trends and Technologies in Agri-Tech with Ouranos Robotics' Leading Blog</p>
        </div>
    </>
    )
}

export default Navbar
