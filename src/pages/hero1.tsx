import React from 'react'

const hero1 = () => {
  return (
    <main className='bg min-h-screen w-full py-1  flex flex-col justify-center items-center gap-5 rounded-b-[6rem] bg-yellow-50'>
            <img src="ds/hero.jpg" className='h-96 object-cover w-96 rounded-full  border-2 border-dashed border-orange-950 bg-background p-1 shadow-xl hover:shadow-2xl '/>
            <div className='flex flex-col items-center gap-1'>
                <div className='font-delius text-lg font-bold text-orange-800'>Marketing <span className='text-foreground'>&</span> Communication</div>
                <div className='text-[6rem] font-signature'><span className='text-orange-300'>D</span>S <span className='text-orange-300'>G</span><span className='text-[3rem] '>roup</span></div>
                <div className='flex text-center font-signature'>Rassemble plusieurs entites specialisees en communication,<br /> offshoring, evenementiel et marketing</div>
            </div>
    </main>
  )
}

export default hero1