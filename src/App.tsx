
import './App.css'
import Navbar from './components/ui/custom/navbar'
import Hero from './pages/hero'
import Hero1 from './pages/hero1'
import Activity from './pages/activity'



function App() {
  
  return (
    <div className='min-h-screen bg-yellow-50'>
      {/* navbar */}
        <div className='flex flex-1'>
          <Navbar/>
        </div>
        <main className='flex flex-1 space-x-2 '>
            <Hero1/>
            
        </main>
        <Activity/>
        <main className='h-screen'>
          
        </main>
        
    </div>
  )
}

export default App
