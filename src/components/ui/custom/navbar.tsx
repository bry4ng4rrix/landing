import { Link } from "react-router-dom"
import { Card } from "../card"
import { Button } from "../button"
import { Home , Activity ,Clapperboard , Notebook ,Search , User } from "lucide-react"

type NavItem = {
    name : string
}

const Nav:NavItem[] =[
    {name : 'Home'},
    {name : 'Activity'},
    {name : 'A propos'},
]

const navbar = () => {
  return (
    <div className=" fixed flex w-screen z-50 p-2 items-center justify-between">

        
          <Card className="bg-foreground/85 backdrop-blur-lg text-white p-2 px-3 rounded-full flex shadow-md space-x-3">
       { Nav.map((n ,index)=> (
            <a href="#" key={index} className="rounded-full hover:text-foreground font-delius hover:bg-white px-2">{n.name}</a>
       ))}
      </Card>
      <div className="flex space-x-6">
        <Button className="bg-foreground/90 hover:bg-transparent hover:border hover:border-foreground hover:text-foreground rounded-full px-6 font-delius  hover:shadow-lg">Contact</Button>
            <div className="flex gap-2">
                <Button className="rounded-full w-10 h-10 hover:shadow-lg hover:bg-orange-200" variant='outline'><Search className="hover:scale-125"/></Button>
                <Button className=" bg-foreground w-10 h-10 text-white rounded-full hover:shadow-lg" variant='outline'><User/></Button>
            </div>
      </div>
    </div>
  )
}

export default navbar
