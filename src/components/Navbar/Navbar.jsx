import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = useRef();

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark')
            }
            else {
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])

return (
    <div className='navbar' ref={navRef}>
        <div className="navbar-left">
            <img src={assets.logo} alt="logo" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search-icon" className='icons' />
            <p>Children</p>
            <img src={assets.bell_icon} alt="bell-icon" className='icons' />
            <div className="navbar-profile">
                <img src={assets.profile_img} alt="profile-icon" className='profile' />
                <img src={assets.caret_icon} alt="ddl-icon"  />
                <div className="dropdown">
                    <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Navbar