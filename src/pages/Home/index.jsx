import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="flex h-screen items-center justify-center flex-col hero gap-4">
            <h1 className="text-6xl text-white font-bold text-center">
                Receive <span className="text-green-400">Anonymous Messages</span>     from <br />Anyone, Anytime, Anywhere
                
            </h1>

            <Link to="/login">
                <button className="bg-green-400 shadow-lg px-5 py-2 rounded-full hover:ring-2 hover:ring-green-600">
                    Get Started
                </button>
            </Link>

        </div>
    )
}