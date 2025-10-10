import { useState } from 'react'
import { Link } from 'react-router-dom'

//ASSETS
import Logo from '../../assets/dnc-logo.svg'

//COMPONENTS
import Button from '../Button/Button'

//STYLE HEADER
import './Header.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-betwen">
                    <Link to="/"><img src={Logo} /></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>Menu</Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="close-btn" onClick={toggleMenu}>X</Button>
                        <ul className='d-flex'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Project</Link></li>
                            <li><Link to="/contact">Contact</Link></li>

                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}

export default Header