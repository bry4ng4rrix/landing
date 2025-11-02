import React from 'react'

type Stack = {
    nom : string
}


const activity = () => {

    const Items:Stack[] = [
        {nom : 'andrana'},
        {nom : 'andrana'},
        {nom : 'andrana'},
        {nom : 'andrana'},
        {nom : 'andrana'},
    ]

  return (
    <main className='bg-white flex flex-col gap-6 items-center justify-center h-screen p-2 px-6 '>

        <div className='grid grid-cols-2 gap-5'>
            <div className='bg-sky-500 h-44 w-64 rounded-2xl'></div>
            <div className='bg-sky-500 h-44 w-64 rounded-2xl'></div>
        </div>
        <div className='grid grid-cols-3 gap-5'>
            <div className='bg-sky-500 h-44 w-64 rounded-2xl'></div>
            <div className='bg-sky-500 h-44 w-64 rounded-2xl'></div>
            <div className='bg-sky-500 h-44 w-64 rounded-2xl'></div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
            <div className='bg-sky-500 h-44 w-64 rounded-2xl'></div>
            <div className='bg-sky-500 h-44 w-64 rounded-2xl'></div>
        </div>
   
      
    </main>
  )
}

export default activity
