import {TiMessages} from "react-icons/ti"

export default function Navbar() {


    return (
        <nav
            className="bg-green-400 p-4 shadow-lg fixed top-0 w-full z-10"
        >
            
            <p
                className="text-3xl text-white font-bold font-mono  text-center flex"
            >
                <TiMessages />
                Anonymous <span className="text-purple-800 underline">Link</span></p>
        </nav>
    )
}