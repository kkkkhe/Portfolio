import { useState } from 'react'
import { Header, Hero, AboutSection, SkillSection, ProjectsSection } from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-grey dark:bg-main-dark text-main-dark dark:text-light-grey'>
        <Header/>
        <Hero/>
        <AboutSection/>
        <SkillSection/>
        <ProjectsSection/>
    </div>
  )
}

export default App
