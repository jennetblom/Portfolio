import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';
import lillaDagens from '../../assets/lillaGumman.jpg';
import lillaChat from '../../assets/lillaChat.jpg';
import lillaKonvo from '../../assets/lillaKonvo.jpg';
import lillaProfil from '../../assets/lillaProfil.jpg';
import jellioStart from '../../assets/jellioStart.png';
import jellioWork from '../../assets/jellioWork.png';
import jellioBoard from '../../assets/jellioBoard.png';
import ticPlay from '../../assets/ticPlay.jpg';
import ticWin from '../../assets/ticWin.jpg';
import ticMatch from '../../assets/ticMatch.jpg';
import ticLeader from '../../assets/ticLeader.jpg';
import fishPlay from '../../assets/fishPlay.jpg';
import fishGo from '../../assets/fishGo.jpg';
import fishRules from '../../assets/fishRules.jpg';
import fishWin from '../../assets/fishWin.jpg';
import petHouse from '../../assets/petHouse.jpg';
import petHost from '../../assets/petHost.jpg';
import petAnimal from '../../assets/petAnimal.jpg';
import petChat from '../../assets/petChat.jpg';


function Projects() {
  return (
    <div className='projects-page'>
      <h1 className='title'>Projekt</h1>
      <ProjectCard title="Jellio" subTitle="Eget projekt i React">
        <p>
          Den här hemsidan är inspirerad av Trello – ett digitalt verktyg för att planera och organisera projekt.
          <br />

        </p>
        <div className='imageDesktopContainer'>
          <img src={jellioStart} className='imageDesktop' />
          <img src={jellioWork} className='imageDesktop' />
        </div>
        <p>  Precis som i Trello skapar man tavlor med listor för att lägga till uppgifter, anteckningar eller idéer.
          Det går även att redigera och ta bort uppgifter vid behov, samt flytta kort mellan listor med drag-och-släpp-funktionalitet.
          <br />
          <br />
          För att samarbeta i realtid, kan man bjuda in andra personer till sin tavla via en länk.
        </p>
        <img src={jellioBoard} className='imageDesktop' />

        <p>
          
          Målet med projektet var att skapa mitt examensarbete och samtidigt få förståelse för hur man använder sig av
          en mer komplex databashantering. Hela applikationen är byggd av mig, med Trello som inspiration för design och funktionalitet.
        </p>
      </ProjectCard>




      <ProjectCard title="Lilla Gumman" subTitle="Ett grupprojekt med React Native ">
        <p>En app utvecklad under min LIA hos företaget Lilla Gumman. 
          Appen ger daglig inspiration genom humoristiska citat och en daglig fråga i ett community-forum. Den innehåller även en länk till “Lilla Gumman GPT”, en digital karaktär där användaren kan chatta med en virtuell personlighet.
          <br />
          <br />

        </p>

        <div className='imagePhoneContainer'>
          <img src={lillaDagens} className='project-image' />
          <img src={lillaChat} className='project-image' />
          <img src={lillaKonvo} className='project-image' />
          <img src={lillaProfil} className='project-image' />
        </div>

        <p>
          Jag hade en bred roll i projektet och arbetade med både frontend och backend,
          bland annat genom att utveckla Firebase-funktioner, Cloud Functions och delar av adminvyn.
        </p>
      </ProjectCard>




      <ProjectCard title="PetBnB" subTitle="Grupparbete i Swift för iOS">
        <p>En AirBnB-inspirerad app där användare hyr bostäder genom att erbjuda djurvaktstjänster istället för pengar. 
   
          I appen kan användarna utforska olika bostäder, spara dem i en favoritlista, chatta direkt med husägare och
          se bostäderna markerade på en karta.
        </p>
        <div className='imagePhoneContainer'>
          <img src={petAnimal} className='project-image' />
          <img src={petHost} className='project-image' />
          <img src={petHouse} className='project-image' />
          <img src={petChat} className='project-image' />
        </div>
<p>Jag utvecklade stora delar av profilsidan samt majoriteten av chatten. Jag stöttade även teamet med mindre uppgifter i deras delar för att säkerställa att allt gick ihop.</p>
      </ProjectCard>


      <ProjectCard title="Tic Tac Party" subTitle="Ett grupparbete utvecklad i Kotlin för Android">
        <p>Tic Tac Party är ett Androidspel där två spelare kan mötas online i realtid i en Tic Tac Toe-match. Spelet inkluderar turordning, vinstlogik, nätverkskommunikation och ett tydligt UI.

        </p>
        <div className='imagePhoneContainer'>
          <img src={ticPlay} className='project-image' />
          <img src={ticMatch} className='project-image' />
          <img src={ticWin} className='project-image' />
          <img src={ticLeader} className='project-image' />
        </div>
        <p> Jag bidrog till grundlayouten och arbetade tillsammans med två andra i teamet med spellogiken. När tidsbrist uppstod gick jag även in och stöttade med matchmaking-rummet, vilket gjorde att vi kunde komma vidare och slutföra projektet i tid. </p>
      </ProjectCard>


      <ProjectCard title="Go Fish" subTitle="Eget projekt i Android">
        <p> Appen är en digital version av kortspelet "Finns i sjön", där målet är att samla fyrtal i olika valörer. Projektet var ett av mina första mobilappar i utbildningen.
  
          
          Jag utvecklade både spel­logiken och animationer som visar hur korten flyttas, vilket gav mig en bättre förståelse för hur man gör appar mer levande och interaktiva.
        </p>
        <div className='imagePhoneContainer'>
          <img src={fishPlay} className='project-image' />
          <img src={fishGo} className='project-image' />
          <img src={fishRules} className='project-image' />
          <img src={fishWin} className='project-image' />
        </div>
        <p>
          Hela applikationen är byggd av mig själv, från design till kodning.
        </p>

      </ProjectCard>

    </div>
  )
}

export default Projects