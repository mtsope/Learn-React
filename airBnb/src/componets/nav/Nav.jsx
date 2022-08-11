import '../nav/Nav.css'
import logo from '../../assets/airbnb-logo.png'

function Nav(){
    return(
        <nav className='nav-logo'>
            <img className='logo' src={logo} alt="logo" />
        </nav>
    )
}

export default Nav