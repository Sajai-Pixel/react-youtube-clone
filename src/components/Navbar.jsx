import React from 'react'
import assets from '../assets/assets'

const Navbar = () => {
    return (
        <>
            <header>
                <img src={assets.logo} alt="logo" className='logo' />
                <div className='flex gap-2'>
                    <div className="search_bar">
                        <input type="text" placeholder="Search" />
                        <button type="submit">
                            <img src={assets.search} alt="search icon" />
                        </button>
                        
                    </div>
                    <button><img src={assets.audio} alt="audio" /></button>
                </div>

                <div className="top-buttons">
                    <ul>
                        <li><a href="#"><img src={assets.notification} alt="" /></a></li>
                        <li><a href="#"><img src={assets.profile_pic} alt="" /></a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar
