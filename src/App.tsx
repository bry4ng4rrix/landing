import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/ui/custom/navbar'
import Hero from './pages/hero'
function App() {
  const [isVar,setisVar] = useState([])
  return (
    <div className='min-h-screen bg-orange-50'>
      {/* navbar */}
        <div className='flex flex-1'>
          <Navbar/>
        </div>
        <main className='flex flex-1 space-x-2'>
            <Hero/>
            
        </main>
        <main className='h-screen  w-full flex justify-between items-center'>
<div className='  w-full h-screen flex justify-center items-center'>
        <div className='h-56 w-1/2 bg-sky-500 justify-center items-center flex'>
kkhk
        </div>
</div>
<div className=' w-full h-full flex justify-center items-center'>
  jkhjh
</div>
        </main>
    </div>
  )
}

export default App
