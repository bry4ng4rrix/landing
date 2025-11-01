import { Card } from "@/components/ui/card"
import { Plus, Eye, Facebook, Github, Bird, Instagram ,Box } from "lucide-react"
import { Button } from "@/components/ui/button"





const hero = () => {



  return (
    <div className="w-full h-screen flex justify-between p-2">
      <div className="flex  items-center px-2 w-full h-full">
        <div className="flex flex-col space-y-0">
          <h4 className="text-orange-300">MARKETING <span className="text-orange-950">&</span> COMMUNICATION</h4>
          <div className="text-[150px] text-orange-300">D<span className="text-black">S</span><span className="text-4xl">G</span><span className="text-3xl">roup</span></div>
          <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Et, similique.</p>
        </div>
      </div>

      <img src='bry.jpeg' className="  shadow-xl rounded-xl  rounded-tr-lg" />
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
