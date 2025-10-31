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
    {name : 'Spot'},
    {name : 'A propos'},
]

const navbar = () => {
  return (
    <div className=" flex justify-between">
      <Card className="bg-foreground text-white p-2 px-3 rounded-full flex  space-x-3">
       { Nav.map((n ,index)=> (
            <a href="#" key={index} className="rounded-full  px-2">{n.name}</a>
       ))}
      </Card>
      <div className="flex space-x-6">
        <Button className="rounded-full">Contact</Button>
            <div className="flex gap-2">
                <Button className="rounded-full" variant='outline'><Search/></Button>
                <Button className=" bg-foreground text-white rounded-full" variant='outline'><User/></Button>
            </div>
      </div>
    </div>
  )
}

export default navbar
