
import './Header.css'
import Moon from '../../assets/MoonWithStars.png';
import Star from '../../assets/Star.png';
function Header() {


  return (

    <div className='header'>
      <div>
        <img src={Moon} id='moon' />
      </div>

      <div>
        <div className='nav-items'>
          <p>Hem</p>
          <p>Om mig</p>
          <p>Project</p>
          <p>CV</p>
          <p>Kontakt</p>
        </div>
        <img src={Star} id='star' />
      </div>
    </div>
  )
}

export default Header