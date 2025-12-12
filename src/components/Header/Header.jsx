
import './Header.css';
import { Link } from 'react-router-dom';
import Moon from '../../assets/MoonWithStars.png';
import Star from '../../assets/Star.png';
function Header() {


  return (

    <header className='header'>
      <div>
        <img src={Moon} id='moon' alt="Måne med stjärnor" />
      </div>
      <nav className='nav-items'>
        <ul className='nav-links-list'>
          <li><Link to="/" className='nav-links'>Hem</Link></li>
          <li><Link to="/projects" className='nav-links'>Projekt</Link></li>
          <li><Link to="/about" className='nav-links'>Om mig</Link></li>
          <li><Link to="/contact" className='nav-links'>Kontakt</Link></li>
          <li><Link to="/resume" className='nav-links'>CV</Link></li>
        </ul>
      </nav>
      <img src={Star} id='star' alt="Stjärna" />
    </header>
  )
}

export default Header