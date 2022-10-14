import { useState } from 'react'
import { Header, Hero, AboutSection, SkillSection, ProjectsSection, Footer } from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-grey dark:bg-main-dark text-main-dark dark:text-light-grey'>
        <Header/>
        <Hero/>
        <AboutSection/>
        <SkillSection/>
        <ProjectsSection/>
        <Footer/>
    </div>
  )
}

export default App
