import { Link } from 'react-router-dom'

//ASSETS
import Logo from '../../assets/dnc-logo.svg'

//STYLE HEADER
import './Header.css'

function Header() {
    return (
        <>
            <div className="container">
                <div className="al-center d-flex jc-space-betwen">
                    <Link to="/"><img src={Logo} /></Link>
                     <nav>
                    <ul className='d-flex'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Project</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>
                </nav>
                </div>
               
            </div>
        </>
    )
}

export default Header