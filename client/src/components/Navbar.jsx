import { useContext } from "react"
import userContext from "../../contexts/userContext"
import {TiMessages} from "react-icons/ti"
import { Link } from "react-router-dom"


export default function Navbar() {

    if(useContext(userContext)){
        const {user , setUser} = useContext(userContext);    
    }
    

    return (
        <nav className="flex bg-green-400 p-4 shadow-lg fixed top-0 w-full z-1">
            <div className="text-3xl text-white font-bold font-mono  text-center flex">
                <TiMessages /> Anonymous <span className="text-purple-800 underline">Link</span>
            </div>
                <Link to="/dashboard" className="text-white underline ml-5">Dashboard</Link>
                <Link to="/logout" className="text-white underline ml-5">Logout</Link>
                {/* Create a component for a route that allows a user to copy their link */}
                {/* Will you use the username or random urls? */}
                {/* <Link to={``} className="text-white underline m-5">Send A Message</Link> */}
     


            
        </nav>
    )
}