import { useContext } from "react"
import {Link} from "react-router-dom"
import userContext from "../../contexts/userContext"


export default function Footer() {
    
    return (
        <footer className="bg-green-400 p-4 text-center mt-10 space-x-3">
            <span className="text-white ">2023 &copy;All rights Reserved</span>

{/* Someone not in an account shouldn't be able to access these */}
            {/* <Link to="/dashboard" className="text-white underline">Dashboard</Link> */}
            {/* <Link to={`/send`} className="text-white underline">Send A Message</Link> */}
        </footer>
    )
}