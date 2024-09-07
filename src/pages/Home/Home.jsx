import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import { assets } from '../../assets/assets'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={assets.hero_banner} alt="background" className='banner-img' />
                <div className="hero-caption">
                    <img src={assets.hero_title} alt="title" className='caption-img' />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aliquam nisi eius inventore totam illum omnis quibusdam
                        consequatur, exercitationem possimus quas?
                    </p>
                    <div className="hero-btns">
                        <button className='btn'><img src={assets.play_icon} alt="play-icon" />Play</button>
                        <button className='btn dark-btn'><img src={assets.info_icon} alt="info-icon" />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
                <TitleCards title={"Only on Netflix"} category={"popular"} />
                <TitleCards title={"Upcoming"} category={"upcoming"} />
                <TitleCards title={"Top Picks for You"} category={"now_playing"} />
            </div>
            <Footer />
        </div>
    )
}

export default Home