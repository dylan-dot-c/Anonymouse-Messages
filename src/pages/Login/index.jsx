import {Link} from "react-router-dom"

export default function Login() {

    return (
       <form
        className="container mx-auto w-full md:w-[350px] px-4 shadow-lg py-4 text-white/80 mt-20 space-y-4 min-h-screen"
       >

        <h1 className="text-green-400 text-3xl text-center">
            LOGIN
        </h1>
        <p>Welcome back to Anonymous Link. Please enter your credentials to continue</p>

        <div className="space-y-4 mt-4">
            
                <div class="relative">
                    <input type="text" id="username" class="floating-input peer" name="username" placeholder=" " />
                    <label for="username" class="floating-label">Username</label>
                </div>
            
                <div class="relative">
                    <input type="password" id="password" class="floating-input peer" placeholder=" " />
                    <label for="password" class="floating-label">Password</label>
                </div>
        
        </div>

        <div className="mt-4">
            <input type="checkbox" name="showPassword" id="showpassword" />
            <label htmlFor="showpassword" className="ml-2">Show Password</label>
        </div>

        <button type="submit"
        className="text-white/80 font-bold rounded-lg px-4 py-2 ring-2 ring-green-400 mt-4 transition mx-auto block hover:bg-green-400 hover:text-black">
            Login
        </button>

        <p className="text-center">Don't have an account? <Link to="/signup" className="text-green-400 underline">Sign Up now!</Link></p>

       </form>
    )
}