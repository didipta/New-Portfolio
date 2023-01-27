import logo from './logo.svg';
import './App.css';
import ProjectShow from './Component/Projects/ProjectShow';
import Reactprojectshow from './Component/Projects/Reactprojectshow';
import Header from './Component/Header/Header';
import Bioinfo from './Component/BioInfo/Bioinfo';
import Skill from './Component/Skill/Skill';



function App() {
  
  return (
   <div>
    <Header></Header>
    <Bioinfo></Bioinfo>
    <div id="project">
    <ProjectShow></ProjectShow>
   <Reactprojectshow></Reactprojectshow>
    </div>
    <Skill></Skill>
   </div>
  );
}

export default App;
