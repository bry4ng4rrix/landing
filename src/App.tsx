
import './App.css'
import Navbar from './components/ui/custom/navbar'
import Hero from './pages/hero'
import Service from './pages/service'
import Activity from './pages/activity'
import Testimonial from './pages/testimonial';



function App() {
  
  return (
    <div className='min-h-screen '>
      {/* navbar */}
        <div className='flex flex-1'>
          <Navbar/>
        </div>
        <main className=' space-x-2 shadow-inner-xl '>
            <Hero />
            
        </main>
        <div id='activity' className='mt-5'>
        <Activity/>

        </div>
        <main className='h-screen bg-indigo-50 rounded-t-[6rem]'>
          <Testimonial/>
        </main>
        <main id='service' className='mt-5 h-screen bg-orange-50 rounded-t-[6rem]'>
          <Service/>
        </main>
        
    </div>
  )
}

export default App
