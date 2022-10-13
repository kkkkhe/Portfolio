import { useState } from 'react'
import { Header, Hero, AboutSection } from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='min-h-screen bg-grey dark:bg-main-dark'>
        <Header/>
        <Hero/>
        <AboutSection/>
    </div>
  )
}

export default App
