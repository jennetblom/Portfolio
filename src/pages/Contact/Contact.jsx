
import './Contact.css';
import GitHub from '../../assets/Github.png';
import LinkedIn from '../../assets/LinkedIn2.png';
function Contact() {

  const handleClick = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.2;
    audio.play();
  };
  return (
    <div className='contact-page'>
      <h1 className='title'>Låt oss prata!</h1>
      <div className='contactContainer'>
        <div className='cardContact'>

          <h2 className='textBold'>
            Har du frågor eller söker ni en ny kollega?

          </h2>
          <p className='textBigger'>

            Aktivt på jakt efter jobb inom apputveckling, och tips på lediga tjänster tas tacksamt emot.
            Ser fram emot att bidra till spännande projekt och samarbeten.
          </p>
          <p>

            Jag svarar snabbast på mobilen, men du är självklart välkommen att kontakta mig via mail, LinkedIn eller GitHub också.
            Ser fram emot att höra från dig!

          </p>
          <hr />
          <div className="contactInfo">
{/*             <p>📱 0700189220</p>
            <button className='button' onClick={handleClick}>📱 0700189220</button>
            <button className='button' onClick={handleClick}>✉️ jeboblom20@hotmail.com</button>
            <p>✉️ jeboblom20@hotmail.com</p> */}
          

            <a
              href="https://github.com/jennetblom"
              target="_blank"
              rel="noopener noreferrer"
              className="iconLink"
            >
              <img src={GitHub} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/jennet-blom-2a78a9200"
              target="_blank"
              rel="noopener noreferrer"
              className="iconLink"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Contact