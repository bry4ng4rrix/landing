import { Card } from "@/components/ui/card"
import { Plus, Eye, Facebook, Github, Bird, Instagram, Box } from "lucide-react"
import { Button } from "@/components/ui/button"





const hero = () => {



  return (
    <div className="w-full h-screen flex justify-between p-2 ">
      <div className="flex  flex-col items-center justify-between px-2 w-full h-full">
        <div>
          a
        </div>
        <div className="flex flex-col ">
          <div className="text-orange-300 font-delius">MARKETING <span className="text-orange-950">&</span> COMMUNICATION</div>
          <div className="text-[150px] font-signature text-orange-300">D<span className="text-black">S</span><span className="text-4xl">G</span><span className="text-3xl">roup</span></div>
          <p className="font-signature">Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Et, similique.</p>
        </div>
<div>
  <div className="font-medium font-delius">
        Ds    
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestiae maiores officia vel, explicabo veritatis eius eum animi repudiandae autem!
</div>

      </div>

      <img src='bry.jpeg' className=" shadow-xl relative 
                                      border border-white/20 rounded-[4rem]
                                      [clip-path:polygon(0%_15%,0%_100%,15%_100%,100%_100%,100%_0%,0%_0%)]
                                      flex items-center justify-center" />
      <div className=" w-full h-full flex justify-end items-end ">
        <div className="flex flex-row gap-8 font-bold -translate-x-4">
          <Facebook className="font-bold hover:text-orange-300 hover:scale-125" />
          <Github className="font-bold hover:text-orange-300 hover:scale-125" />
          <Bird className="font-bold hover:text-orange-300 hover:scale-125" />
          <Instagram className="font-bold hover:text-orange-300 hover:scale-125" />

        </div>

      </div>

    </div>
  )
}

export default hero
