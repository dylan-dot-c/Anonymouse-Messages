import {Link} from "react-router-dom"

export default function Footer() {


    return (
        <footer className="bg-green-400 p-4 text-center mt-10 space-x-3">
            <span className="text-white ">2023 &copy;All rights Reserved</span>
            <Link to="/dashboard" className="text-white underline">Dashboard</Link>
            <Link to="/send/Dylan" className="text-white underline">Send A Message</Link>
        </footer>
    )
}