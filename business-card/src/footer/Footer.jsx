import '../footer/Footer.css'
import twiter from '../assets/twiter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/insta.png'
import github from '../assets/git.png'

function Footer(){
    return(
        <footer className='footer'>
            <img src={twiter} alt="twiter" ></img>
            <img src={facebook} alt="facebook" ></img>
            <img src={instagram} alt="insta" ></img>
            <img src={github} alt="git" ></img>
        </footer>
    )
}

export default Footer