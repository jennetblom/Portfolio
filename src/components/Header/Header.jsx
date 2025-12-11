
import './Header.css';
import { Link } from 'react-router-dom';
import Moon from '../../assets/MoonWithStars.png';
import Star from '../../assets/Star.png';
function Header() {


  return (

    <header className='header'>
      <div>
        <img src={Moon} id='moon' />
      </div>
        <nav className='nav-items'>
          <Link to="/" className='nav-links'>Hem</Link>
          <Link to="/projects" className='nav-links'>Projekt</Link>
          <Link to="/about" className='nav-links'>Om mig</Link>
          <Link to="/contact" className='nav-links'>Kontakt</Link>
          <Link to="/projects" className='nav-links'>CV</Link>
        <img src={Star} id='star' />
      </nav>
    </header>
  )
}

export default Header