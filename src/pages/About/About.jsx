import './About.css';
import happy from '../../assets/happy.jpg';
import Button from '../../components/Button/Button.jsx';
function About() {
  return (
    <main>
      <h1 className='title'>Om mig</h1>

      <section className='aboutContainer'>
        <article className='aboutCard'>
          <img src={happy} id='profilePic' />
          <p className='boldtext'>
            Jag är en nyexaminerad mobilapplikationsutvecklare med erfarenhet av Android, iOS, React Native och webbutveckling i React.
            För mig är programmering ett spännande sätt att kombinera kreativitet och logik.
          </p>

          <h2 className='aboutCardHeading'>💼 Erfarenhet och projekt</h2>
          <p className='aboutCardText'>
            Under utbildningen har jag arbetat praktiskt med flera projekt, både individuellt och i team.
            I samarbeten trivs jag bra med att komma med idéer, lösa problem, kommunicera, stötta och bidra där det behövs för att projektet ska gå framåt och bli klart i tid. Jag trivs i arbetsmiljöer där det finns en öppen och positiv stämning, där man både kan skratta tillsammans och arbeta fokuserat mot gemensamma mål.
          </p>

          <h2 className='aboutCardHeading'>⭐ Vad för jobb jag söker</h2>
          <p className='aboutCardText'>
            Just nu söker jag ett jobb inom programmering där jag kan fortsätta att bidra till roliga och spännande projekt. Jag dras särskilt till projekt som rör spel, hälsa, psykologi, musik, teknik, konst, AI, eller visuell design.
          </p>

          <h2 className='aboutCardHeading'>🌿 Fritidsintressen</h2>
          <p className='aboutCardText'>
            Utöver programmering tycker jag om att skapa musik, måla, spela och utforska skogen.
          </p>
          <Button label="Kontakta mig" to="/contact" />
        </article>
      </section>

    </main>
  )
}

export default About;