import { useState } from "react"

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        showPassword: false,
    })

    function handleChange(event) {
        const {value, name, type, checked} = event.target

        setFormData( (prev) => {

            return ({
                ...prev,
                [name]: type=="checkbox" ? checked: value,
            })
        })

        console.log(formData)
    }


    return (
       <form
        className="container mx-auto w-full md:w-[350px] px-4 shadow-lg py-4 text-white/80 mt-20 min-h-screen space-y-4"
       >

        <h1 className="text-green-400 text-3xl text-center">
            Signup
        </h1>
        <p>To get started in receiving Anonymous Messages please signup.</p>

        <div className="space-y-4 mt-4">
            
                <div class="relative">
                    <input type="text" id="username" className="floating-input peer" name="username" placeholder=" " onChange={handleChange}/>
                    <label htmlFor="username" className="floating-label">Username</label>
                </div>

                <div className="relative">
                    <input type="text" id="email" className="floating-input peer" name="email" placeholder=" " onChange={handleChange}/>
                    <label htmlFor="email" className="floating-label">Email</label>
                </div>
            
                <div className="relative">
                    <input type={formData.showPassword ? "text" : "password"} id="password" className="floating-input peer" placeholder=" " onChange={handleChange}/>
                    <label htmlFor="password" className="floating-label">Password</label>
                </div>
        
        </div>

        <div className="mt-4">
            <input type="checkbox" name="showPassword" id="showpassword" onChange={handleChange}/>
            <label htmlFor="showpassword" className="ml-2">Show Password</label>
        </div>

        <button type="submit"
        className="text-white/80 font-bold rounded-lg px-4 py-2 ring-2 ring-green-400 mt-4 transition mx-auto block hover:bg-green-400 hover:text-black">
            Get Started
        </button>

       </form>
    )
}