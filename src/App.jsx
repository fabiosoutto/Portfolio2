//Components
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

//Sass
import "./styles/components/app.sass";


function App() {
  

  return (
    <div id="portfolio">
      <h1>Fabio Soutto</h1>
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
