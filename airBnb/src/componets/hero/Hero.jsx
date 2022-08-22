
import '../hero/Hero.css'
import img_hero from '../../assets/hero.png'

function Hero() {
    return(
        <div className="hero_items">
        <div className="img-wrapper">
        <img src={img_hero}  alt="hero" />
        </div>
        <h2>Online Experiences</h2>
        <p>Join unique interactive activities led by 
            <br></br>one-of-a-kindhosts-all without leaving home</p>
    </div>
    )
  
}

export default Hero