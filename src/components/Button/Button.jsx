import './Button.css';
import { useNavigate } from 'react-router-dom';
import clickSound from "../../assets/clicksound.wav";
function Button({ label, to, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.2;
    audio.play();
    navigate(to);
  }
  return (
    <button onClick={handleClick} className="button" >
      {label}
    </button>
  );
}

export default Button;