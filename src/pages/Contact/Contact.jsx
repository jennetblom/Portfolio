
import './Contact.css';
import GitHub from '../../assets/Github.png';
import LinkedIn from '../../assets/LinkedIn2.png';
import Button from '../../components/Button/Button.jsx';
function Contact() {


  return (
    <main className='contact-page'>
      <h1 className='title'>Låt oss prata!</h1>
      <section className='contactContainer'>
        <article className='contact-card'>
          <div className='contact-text'>
            <p>
              Jag är aktivt på jakt efter jobb inom programmering, och tips på lediga tjänster tas tacksamt emot.
              Ser fram emot att bidra till spännande projekt och samarbeten.
            </p>

            <p>
              Jag svarar snabbast på mobilen, men du är självklart välkommen att kontakta mig via mail, LinkedIn eller GitHub också.
              Ser fram emot att höra från dig! 🌞
            </p>
            <p className='contact-details'>Kontakta mig</p>
          </div>
          <div className='contact-links'>

            <section className="contactInfo">
              <a href="tel:0700189220" className="iconLinkText">
                <span>📱 0700-189220</span>
              </a>

              <a href="mailto:jeboblom20@hotmail.com" className="iconLinkText">
                <span>✉️ jeboblom20@hotmail.com</span>
              </a>
            </section>

            <section className='icons'>
              <a
                href="https://github.com/jennetblom"
                target="_blank"
                rel="noopener noreferrer"
                className="iconLink"
              >
                <img src={GitHub} alt="GitHub" className='contact-iconGit' />
                <span>Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jennet-blom-2a78a9200"
                target="_blank"
                rel="noopener noreferrer"
                className="iconLink"
              >
                <img src={LinkedIn} alt="LinkedIn" className='contact-icon' />
                <span>LinkedIn</span>
              </a>


            </section>

          </div>
          <div className='placeButton'>
            <Button label="Se mitt cv" to="/resume" />
          </div>

        </article>
      </section>
    </main>
  )
}

export default Contact