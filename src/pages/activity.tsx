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
    <div className='bg-white grid grid-cols-5 gap-6 items-center justify-center h-52 p-2 px-6 '>
     { Items.map((i,index) => (
         <div key={index} className='h-24  bg-sky-400 rounded'></div>
     ))}
      
    </div>
  )
}

export default activity
