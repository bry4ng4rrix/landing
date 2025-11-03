
import './App.css'
import Navbar from './components/ui/custom/navbar'
import Hero from './pages/hero'
import Service from './pages/service'
import Activity from './pages/activity'
import Testimonial from './pages/testimonial';
import Footer from './pages/footer'



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
        <main id='about' className='bg-gradient-to-br from-background to-sky-200  rounded-t-[6rem] '>
          <Testimonial/>
        </main>
        <main id='service' className=' bg-orange-50 rounded-t-[6rem]'>
          <Service/>
        </main>
        <Footer/>
        
    </div>
  )
}

export default App
