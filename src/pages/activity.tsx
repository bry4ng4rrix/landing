

const activity = () => {


  return (
    <main className=' flex flex-col gap-3 items-center justify-center h-screen   rounded-b-[6rem]'>

        <div className='grid grid-cols-2 gap-5'>
            <img src='ds/1.jpg' className='object-cover shadow-lg hover:scale-105 hover:shadow-2xl border p-1 border-dashed border-blue-500 h-44 w-64 rounded-2xl'/>
            <img src='ds/2.jpg' className='object-cover shadow-lg hover:scale-105 hover:shadow-2xl border p-1 border-dashed border-fuchsia-700 h-44 w-64 rounded-2xl'/>
        </div>
        <div className='grid grid-cols-3 gap-10 items-center justify-center'>
            <img src='ds/3.jpg' className='object-cover shadow-lg hover:scale-105 hover:shadow-2xl border p-1 border-dashed border-sky-500 h-44 w-64 rounded-2xl'/>
            <img src='ds/4.jpg' className='object-cover shadow-lg hover:scale-105 hover:shadow-2xl border p-1 border-dashed border-yellow-700 h-52  w-64 rounded-2xl'/>
            <img src='ds/5.jpg' className='object-cover shadow-lg hover:scale-105 hover:shadow-2xl border p-1 border-dashed border-green-700 h-44 w-64 rounded-2xl'/>
        </div>
        <div className='grid grid-cols-2 gap-5'>
            <img src='ds/6.jpg' className='object-cover shadow-lg hover:scale-105 hover:shadow-2xl border p-1 border-dashed border-amber-700 h-44 w-64 rounded-2xl'/>
            <img src='ds/7.jpg' className='object-cover shadow-lg hover:scale-105 hover:shadow-2xl border p-1 border-dashed border-sky-500 h-44 w-64 rounded-2xl'/>
        </div>
   
      
    </main>
  )
}

export default activity
