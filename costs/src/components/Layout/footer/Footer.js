import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import './Footer.css'

function Footer() {
    return(
        <footer className='footer'>
            <ul className='social_list'>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className='copy_right'>
                <span>Michela Tsope</span> &copy; Costs - 2022
            </p>
        </footer>
    )
    
}

export default Footer