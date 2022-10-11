import {Link} from 'react-router-dom'

import Container from '../container/Container'

import './NavBar.css'

import logo from '../../../img/costs_logo.png'

function NavBar() {
    return (
        <nav className="navbar">
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className="list">
                    <li className='item'>
                      <Link to="/">Home</Link>
                    </li>
                    <li className='item'>
                        <Link to="/projects">Meu Projecto</Link>
                    </li>
                    <li className='item'>
                        <Link to="/contact">Contacto</Link>
                    </li>
                    <li className='item'>
                        <Link to="/company">Empresa</Link>
                    </li>
                </ul>
            </Container> 
        </nav>
    )
}

export default NavBar