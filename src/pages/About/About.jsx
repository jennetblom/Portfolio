import './About.css';

function About() {
  return <div>
    <h1 className='title'>Om mig</h1>
    <div className='aboutContainer'>
      <div className='aboutCard'>
     <p className='aboutCardText'>
            Jag är en nyexaminerad mobilapplikationsutvecklare med erfarenhet av Android, iOS, React Native och webbutveckling i React.
            För mig är programmering ett spännande sätt att kombinera kreativitet och logik.
          </p>
           <p className='aboutCardHeading'>💼 Erfarenhet och projekt</p>
      
                <p className='aboutCardText'>
            Under utbildningen har jag arbetat praktiskt med flera projekt, både individuellt och i team. 
I samarbeten trivs jag bra med att kommunicera, komma med idéer, lösa problem, stötta och bidra där det behövs för att projektet ska gå framåt och bli klart i tid. Jag trivs i arbetsmiljöer där det finns en öppen och positiv stämning, där man både kan skratta tillsammans och arbeta fokuserat mot gemensamma mål. 

          </p>
                <p className='aboutCardHeading'>⭐ Vad för jobb jag söker</p>
             <p className='aboutCardText'>
                Just nu söker jag ett jobb inom programmering där jag kan fortsätta att bidra till roliga och spännande projekt. Jag dras särskilt till projekt som rör spel, hälsa, psykologi, musik, teknik, konst, AI, eller visuell design.
          </p>
 
               <p className='aboutCardHeading'>🌿 Fritidsintressen</p>
          
             <p className='aboutCardText'>
            Utöver programmering tycker jag om att skapa musik, måla, läsa och röra på mig på olika sätt.
          </p>
      </div>
    </div>

  </div>;
}

export default About;