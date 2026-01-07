import './Resume.css';

function Resume() {


    return (

        <main className="resume-page">
            <h1 className='title'>Mitt CV</h1>
            <div className="resume-card">

                <p>Med erfarenhet av att utveckla både mobila och webbapplikationer söker jag nu ett jobb inom programmering för att utvecklas och fördjupa mina kunskaper. Jag hoppas få arbeta i en roll där jag kan använda min nyfikenhet, kreativitet och förmåga att samarbeta med andra. </p>
                <h2>UTBILDNING</h2>
                <p className='resume-headingText'>Folkuniversitetet i Göteborg | Mobilapplikationsutvecklare | 2023 – 2025</p>
                <p className='resume-text'>
                    En yrkesutbildning på 2 år där jag fått lära mig arbeta i Android, IOS och utveckla i cross-plattformutveckling samt bygga appar med hjälp av databaser. Utbildningen inkluderar mycket praktisk erfarenhet kombinerat med teori. Vi har fått arbeta med agila metoder och samarbeta i grupp via Github.
                </p>
                <p className='resume-headingText'>Per Brahegymnasiet i Jönköping | Estetiska programmet – Musik | 2014 – 2017</p>
                <p className='resume-text'>
                    I gymnasiet valde jag Programmering 1 som individuellt val. Genom läroboken Spelprogrammering.nu fick jag lära mig grunderna i C# och JavaScript.
                </p>
                <h2>ARBETSLIVSERFARENHETER</h2>
                <p className='resume-headingText'>2025 | Vårdbiträde | Bifrost korttidsenhet i Mölndal</p>
                <p className='resume-text'>
                    Under tiden lärde jag mig att arbeta effektivt under tidspress för att säkerställa att alla vårdtagare fick den hjälp och medicin de behövde. Eftersom det var en korttidsenhet var det viktigt att ställa om snabbt och anpassa sig till nya situationer och nya människor.
                </p>
                <p className='resume-headingText'>2023 | Stödbiträde | Klämmavägens gruppbostad i Alingsås</p>
                <p className='resume-text'>
                    Arbetade med att stötta personer med funktionsvariationer i deras dagliga liv genom hjälp vid personlig hygien, vardagssysslor och motivation till ökad självständighet. Deltog i sociala aktiviteter tillsammans med brukare, exempelvis bingo, promenader och sång.
                </p>
                <p className='resume-headingText'>2021 | Lagerarbetare | Aditro Logistics i Jönköping</p>
                <p className='resume-text'>
                    Arbetade inom lagerhantering med plock och pack, skanning, registrering samt inlagring och inventering av varor.
                </p>
                <p className='resume-headingText'>2020 | Vårdbiträde | Kärrhöksgatans gruppbostad i Jönköping</p>
                <p className='resume-text'>
                    Gav stöd till äldre och personer med vårdbehov i deras dagliga liv.
                </p>
                <p className='resume-headingText'>2018 | Servitris | Rosengarden i Jönköping</p>
                <p className='resume-text'>
                    Under två år arbetade jag på restaurangen med varierande arbetsuppgifter bland annat plocka tallrikar, stå i baren, ta beställning och sköta kassan.
                </p>
                <h2>
                    TEKNISKA FÄRDIGHETER
                </h2>
                <p className='resume-text'> Programmeringsspråk: Java, Kotlin, Swift, JavaScript, C#, HTML, CSS, React, React Native</p>
                <p className='resume-text'>Verktyg och teknologier: Android Studio, Xcode, GitHub, Firestore, AWS, Figma, Trello</p>
            </div>
        </main>

    )
}

export default Resume