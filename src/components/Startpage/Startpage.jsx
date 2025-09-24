import profilbild from '../../assets/profilbild.jpg';
import './Startpage.css'
import rectangle from '../../assets/Rectangle.png';
import workplace from '../../assets/workplace.png';
import clickSound from "../../assets/clicksound.wav";
function Startpage() {

    const handleClick = () => {
        const audio = new Audio(clickSound);
        audio.volume = 0.1;
        audio.play();
    };
    return (

        <div className='startpage'>
            <div className='card'>

                <div className='title'>
                    <p id='intro'>
                        Hej, mitt namn är
                    </p>
                    <h1 id='name'>Jennet Blom</h1>
                </div>
                <p id='description'>
                    Jag är en nyexaminerad apputvecklare som gillar att vara kreativ och påhittig.
                    <br></br>
                    Har erfarenhet av både mobila plattformar och crossplattformutveckling.
                </p>
                <button className='button' onClick={handleClick}>Se mina projekt</button>
            </div>

            <div className='image-container'>
                <img src={rectangle} className='rectangle' />
                <img src={profilbild} className='profilePic' />
            </div>
            <img src={workplace} id='workplace'></img>
        </div>

    )
}

export default Startpage