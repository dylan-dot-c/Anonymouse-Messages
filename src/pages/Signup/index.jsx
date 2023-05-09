import { useState } from "react"
import axios from "axios"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate()
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

    async function handleSubmit(event) {
        const {username, email, password} = formData
        event.preventDefault()

        if(username.length < 6) {
            toast.error("Username can't be less than 6 chars")
            return
        }
        if(password.length < 6) {
            toast.error("Password must be at least 6 chars long")
            return
        }

        try {
            const result = await axios.post("http://127.0.0.1:3000/users/add", formData)

            toast.success("Signed up successfully!")
            navigate('/login')

        }catch(err) {
            console.error(err)
        }
    }


    return (
       <form
        className="container mx-auto w-full md:w-[350px] px-4 shadow-lg py-4 text-white/80 mt-20 min-h-screen space-y-4"
        onSubmit={handleSubmit}
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
                    <input type={formData.showPassword ? "text" : "password"} id="password" name="password" className="floating-input peer" placeholder=" " onChange={handleChange}/>
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