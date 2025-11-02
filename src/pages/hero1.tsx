import React from 'react'

const hero1 = () => {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center gap-5'>
            <img src="bry.jpeg" className='h-96 object-cover w-96 rounded-full  border-2 border-dashed border-orange-950 bg-background p-1 shadow-xl hover:shadow-2xl '/>
            <div className='flex flex-col items-center gap-1'>
                <div className='font-delius text-lg font-bold text-orange-800'>Marketing <span className='text-foreground'>&</span> Communication</div>
                <div className='text-[6rem] font-signature'><span className='text-orange-300'>DS</span> G<span className='text-[3rem] text-orange-300'>roup</span></div>
                <div className='flex text-center font-signature'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti illum pariatur autem consequatur perferendis dolores <br /> debitis unde dolore error tenetur.</div>
            </div>
    </main>
  )
}

export default hero1