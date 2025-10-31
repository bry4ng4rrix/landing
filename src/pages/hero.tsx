import { Card } from "@/components/ui/card"
import { Plus ,Eye ,Facebook ,Github , Bird , Instagram} from "lucide-react"
import { Button } from "@/components/ui/button"
const hero = () => {
  return (
    <div className="w-full h-screen flex justify-between -translate-y-10">
      <div className="flex  items-center p-2 w-full h-full">
            <div className="space-y-1">
                <p>Bienvenu Chez</p>
                <h1 className="text-6xl text-orange-300">D & S G<span>roup</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Et, similique.</p>
            </div>
      </div>
      
      <img src='bry.jpeg' className=" h-5/6  shadow-xl rounded-xl  rounded-tr-lg"/>
      <div className=" w-full h-full flex justify-end items-end py-5">
<div className="flex flex-row gap-8 font-bold -translate-x-4">
    <Facebook className="font-bold hover:text-orange-300"/>
    <Github className="font-bold hover:text-orange-300"/>
    <Bird className="font-bold hover:text-orange-300"/>
    <Instagram className="font-bold hover:text-orange-300"/>
    
</div>

      </div>
    </div>
  )
}

export default hero
