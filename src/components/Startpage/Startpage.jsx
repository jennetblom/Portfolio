import profilbild from '../../assets/profilbild.jpg';
import './Startpage.css'
function Startpage() {


    return (

        <div className='startpage'>
            <div>

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
            </div>

            <img src={profilbild} className='profilePic' />
        </div>

    )
}

export default Startpage