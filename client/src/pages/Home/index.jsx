
import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../../contexts/userContext";

export default function Home() {
    const { user } = useContext(userContext);

    return (
        <div
            className={`flex h-screen items-center justify-center flex-col ${
                !user && "hero"
            } gap-4`}
        >
            <h1 className="text-3xl md:text-6xl text-white font-bold text-center">
                Receive{" "}
                <span className="text-green-400">Anonymous Messages</span> from{" "}
                <br />
                Anyone, Anytime, Anywhere
            </h1>
            <div>
                <Link to={!user ? "/login" : "/dashboard"}>
                    <button className="m-4 text-white text-2xl bg-green-500 shadow-lg px-5 py-2 rounded-full hover:bg-green-600">
                        {!user ? "Login And Send Away!" : "Go To Dashboard"}
                    </button>
                </Link>
            </div>
        </div>
    );
}