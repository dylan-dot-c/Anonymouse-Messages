
import axios from "axios";

import { Link } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import userContext from "../../../contexts/userContext";

export default function Login() {
    const [isChecked, setIsChecked] = useState(false);

    const usernameInputReference = useRef("");
    const passwordInputReference = useRef("");

    const { user, setUser } = useContext(userContext);

    function handleShowPasswordChange() {
        setIsChecked(!isChecked);
    }

    async function handleSubmission(event) {
        event.preventDefault();
        const loginEndPoint = "http://localhost:3000/auth/login";

        const formData = {
            username: usernameInputReference.current.value.toLowerCase(),
            password: passwordInputReference.current.value,
        };

        try {
            const response = await axios.post(loginEndPoint, formData);
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(user));
        } catch {
            // use toast to indicate failed login
            console.log("error");
        }
    }
    return (
        <form
            onSubmit={handleSubmission}
            className="container mx-auto w-full md:w-[350px] px-4 shadow-lg py-4 text-white/80 mt-20 space-y-4 min-h-screen"
        >
            <h1 className="text-green-400 text-3xl text-center">LOGIN</h1>
            <p>
                Welcome back to Anonymous Link. Please enter your credentials to
                continue
            </p>
            <div className="space-y-4 mt-4">
                <div className="relative">
                    <input
                        type="text"
                        id="username"
                        className="floating-input peer"
                        name="username"
                        ref={usernameInputReference}
                    />
                    <label htmlFor="username" className="floating-label">
                        Username
                    </label>
                </div>
                <div className="relative">
                    <input
                        type={isChecked ? "text" : "password"}
                        name="password"
                        id="password"
                        className="floating-input peer"
                        ref={passwordInputReference}
                    />
                    <label htmlFor="password" className="floating-label">
                        Password
                    </label>
                </div>
            </div>
            <div className="mt-4">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleShowPasswordChange}
                    name="showPassword"
                    id="showpassword"
                />
                <label htmlFor="showpassword" className="ml-2">
                    Show Password
                </label>
            </div>
            <button
                type="submit"
                className="text-white/80 font-bold rounded-lg px-4 py-2 ring-2 ring-green-400 mt-4 transition mx-auto block hover:bg-green-400 hover:text-black"
            >
                Login
            </button>
            <p className="text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-green-400 underline">
                    Sign Up now!
                </Link>
            </p>
        </form>
    );
}