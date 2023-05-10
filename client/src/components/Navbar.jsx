import { useContext } from "react";
import userContext from "../../contexts/userContext";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { user } = useContext(userContext);

    return (
        <nav className="flex bg-green-400 p-2 px-10 shadow-lg fixed top-0 w-full z-10 gap-20">
            <div className="text-3xl text-white font-bold font-mono  text-center flex">
                <TiMessages /> Anonymous{" "}
                <Link to={"/"}>
                    <span className="text-purple-800 underline">Link</span>
                </Link>
            </div>

            <div className="text-xl text-white text-center flex">
                {user && (
                    <>
                        <Link to="/" className="text-white ml-5">
                            Home
                        </Link>
                        <Link to="/dashboard" className="text-white ml-5">
                            Dashboard
                        </Link>
                        <Link to="/logout" className="text-white ml-5">
                            Logout
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}