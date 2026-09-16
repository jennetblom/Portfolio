import profilbild from '../../assets/profilbild.jpg';
import './Home.css'
import workplace from '../../assets/workplace.png';
import Button from '../../components/Button/Button.jsx';
function Startpage() {


    return (

        <main className='startpage'>
            <section className='card'>

                <header className='nameInfo'>
                    <p className="cardSubtitle">
                        Hej, mitt namn är
                    </p>
                    <h1 id='name'>Jennet Blom</h1>
                </header>
                <p>
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