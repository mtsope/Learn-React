import logo from '../assets/me1.jpg'
import '../header/Header.css'

function Header() {
    return(
        <nav className='main'>
            <div className="img-wrapper">
            <img className='logo' src={logo} alt="logo" />
            </div>
            <h3>Michela Tsope</h3>
            <h5>Full stack Developer</h5>
            <h6>michelatsope.website</h6>
            <div className='button'>
                <button className='button1'> <i class="fa-solid fa-envelope"></i>Email</button>
                <button className='button2'> <i class="fa-brands fa-linkedin"></i>Linkedin</button>
            </div>
           
        </nav>
    )
}

export default Header
