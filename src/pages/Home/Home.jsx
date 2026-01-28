import profilbild from '../../assets/profilbild.jpg';
import './Home.css'
import rectangle from '../../assets/Rectangle.png';
import workplace from '../../assets/workplace.png';
import clickSound from "../../assets/clicksound.wav";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
function Startpage() {

    const navigate = useNavigate();

/*     const handleClick = () => {
        const audio = new Audio(clickSound);
        audio.volume = 0.2;
        audio.play();
        navigate('/projects');
    }; */
    return (

        <main className='startpage'>
            <section className='card'>

                <header className='nameInfo'>
                    <p id='intro'>
                        Hej, mitt namn är
                    </p>
                    <h1 id='name'>Jennet Blom</h1>
                </header>
                <p id='description'>
                    Jag är en nyexaminerad apputvecklare som gillar att vara kreativ och påhittig.
                    <br />
                    Har erfarenhet av både mobila plattformar och crossplattformutveckling.
                </p>
                <Button label="Se mina projekt" to="/projects" />
            </section>

            <aside className='image-container'>
                <img src={profilbild} className='profilePic' />
            </aside>
            <img src={workplace} id='workplace'></img>
        </main>

    )
}

export default Startpage