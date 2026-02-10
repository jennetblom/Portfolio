import './Resume.css';
import Button from '../../components/Button/Button.jsx';
function Resume() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'Jennet-Blom-CV.pdf';
        link.click();
    }

    return (

        <main className="resume-page">
            <h1 className='title'>Mitt CV</h1>
            <div className="resume-card">

                <p className='resume-intro'>Med erfarenhet av att utveckla både mobila och webbapplikationer söker jag nu ett jobb inom programmering där jag kan fördjupa mina kunskaper och bidra med kreativitet, engagemang och förmåga att samarbeta med andra. </p>
                <h2 className='resume-header'>UTBILDNING</h2>
                <p className='resume-headingText'>Folkuniversitetet i Göteborg | Mobilapplikationsutvecklare | 2023 – 2025</p>
                <p className='resume-text'>
                    Praktiskt inriktad utbildning i Android, iOS och cross-plattformutveckling där jag har arbetat med att bygga appar med databaser och molntjänster.

                    Under utbildningen har jag fått praktisk erfarenhet av agila arbetssätt, teamarbete och versionshantering via GitHub. Jag har även genomfört två LIA-perioder och ett examensarbete där jag självständigt utvecklade en applikation från idé till färdig produkt.
                </p>
                <p className='resume-headingText'>Per Brahegymnasiet i Jönköping | Estetiska programmet – Musik | 2014 – 2017</p>
                <p className='resume-text'>
                    I gymnasiet valde jag Programmering 1 som individuellt val. Genom läroboken Spelprogrammering.nu fick jag lära mig grunderna i C# och JavaScript.
                </p>
                <h2 className='resume-header'>ARBETSLIVSERFARENHETER</h2>
                      <p className='resume-headingText'>LIA 1 – Apputveckling | Uppdrag åt Lilla Gumman</p>
                <p className='resume-text'>
                  Ett projekt där jag och mina två skolkamrater utvecklade en mobilapp åt konstnären bakom varumärket Lilla Gumman, en färgstark och humoristisk fiktiv figur som används i målningar och produkter i en webbshop. Vi arbetade med frontend, funktion för ”Dagens Gumma” samt inloggning och registrering med Firebase, och appen utformades för att spegla konstnärens vision, färger och typsnitt.
                </p>
                      <p className='resume-headingText'>LIA 2 – Fortsatt utveckling | Lilla Gumman</p>
                <p className='resume-text'>
                   Vidareutvecklade appen med community-funktioner, adminsida, delning till sociala medier samt responsiv design och GDPR-anpassning.
                </p>
                <p className='resume-headingText'>2025 | Vårdbiträde | Bifrost korttidsenhet i Mölndal</p>
                <p className='resume-text'>
                    Under tiden lärde jag mig att arbeta effektivt under tidspress för att säkerställa att alla vårdtagare fick den hjälp och medicin de behövde. Eftersom det var en korttidsenhet var det viktigt att ställa om snabbt och anpassa sig till nya situationer och nya människor.
                </p>
                <p className='resume-headingText'>2023 | Stödbiträde | Klämmavägens gruppbostad i Alingsås</p>
                <p className='resume-text'>Jag stöttade personer med funktionsvariationer i vardagssysslor och personlig hygien samt deltog i sociala aktiviteter, till exempel bingo, promenader och sång.
                </p>
         
          
                <p className='resume-headingText'>2018 | Servitris | Rosengarden i Jönköping</p>
                <p className='resume-text'>
                   Jag arbetade på restaurangen med varierande arbetsuppgifter bland annat plocka tallrikar, stå i baren, ta beställning och sköta kassan.
                </p>
                <h2 className='resume-header'>
                    TEKNISKA FÄRDIGHETER
                </h2>
                <p className='resume-text'> Programmeringsspråk: Java, Kotlin, Swift, JavaScript, C#, HTML, CSS, React, React Native</p>
                <p className='resume-text'>Verktyg och teknologier: Android Studio, Xcode, GitHub, Firestore, AWS, Figma, Trello</p>
                <Button label="Ladda ner CV" onClick={handleDownload} />
            </div>
        </main>

    )
}

export default Resume