import {Menu} from './components/menu/menu.component.js'
import {Main} from './components/main/main.component.js'
import {About} from './components/about/about.component.js'
import {Skills} from './components/skills/skills.component.js'
import {Qualification} from './components/qualification/qualification.component.js'
import {Projects} from './components/servicies/projects.component.js'
import './index.css'
function App() {
  return (
    <span>
      <Main />
      <About />
      <Skills/>
      <Qualification/>
      <Projects/>
    </span>
  );
}

export default App;
