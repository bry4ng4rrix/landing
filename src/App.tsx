import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/ui/custom/navbar'

function App() {
  const [isVar,setisVar] = useState([])
  return (
    <div className='p-2'>
      <Navbar/>
    </div>
  )
}

export default App
