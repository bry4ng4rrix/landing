import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/ui/custom/navbar'
import Hero from './pages/hero'
function App() {
  const [isVar,setisVar] = useState([])
  return (
    <div className='p-2 h-full bg-orange-50'>
      {/* navbar */}
        <div className='relative'>
          <Navbar/>
        </div>
        <main>
            <Hero/>
        </main>
    </div>
  )
}

export default App
