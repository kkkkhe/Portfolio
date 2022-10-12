import { useState } from 'react'
import { Header, Hero } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-grey dark:bg-main-dark'>
        <Header/>
        <Hero/>
    </div>
  )
}

export default App
