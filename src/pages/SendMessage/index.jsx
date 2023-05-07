
import { useParams} from "react-router-dom"
import { useState } from "react"
import {toast} from "react-toastify"
import {BiMessageCheck} from "react-icons/bi"

export default function SendMessage() {

    const { username } = useParams()

    const [charCount, setCharCount] = useState(0)
    const [message, setMessage] = useState("")

    const conditions = [
        "Please keep messages fun, kind and respectful. We do not tolerate cyberbullying.",
        "Messages sent here are encrypted to ensure safe transmission to and from our server.",
        "Anyone can send an anonymous message, a user doesn't have to be signed in to send a message.",

    ]

    function handleChange(event) {
        const {value} = event.target
        const length = value.length

        setMessage((prev) => {
            return (value)
        })

        setCharCount(length)

        console.log(message, message.length)
    }

    let terms = conditions.map( (condition, index) => {
        return (
            <li key={index}>
                {condition}
            </li>
        )
    }
    )

    return (
        <div className="my-20 container mx-auto bg-gray-800 px-6 py-10 max-w-[800px]">
            <h1
                className="text-2xl md:text-4xl text-center text-white/90 "
            >Send a secret message to <span className="text-green-400 underline font-bold">{username}</span></h1>

            <p className="text-white my-4 text-xl"> <span className="text-purple-400 underline">{username}</span> will never know who sent this message.</p>

            <p className={`text-right ${message.length===255 ? "text-red-500": "text-white"}`}>{message.length}/255</p>

            <textarea name="message" id="" cols="30" rows="10" maxLength="255"
                className="text-white px-4 py-4 bg-gray-700 rounded-lg outline-0 resize-none w-full md:w-4/5 mx-auto ring-2 block  ring-green-400"
                onChange={handleChange}
                >

            </textarea>
            <button className="text-white px-4 py-3 rounded bg-green-600 shadow-lg block my-4 mx-auto" onClick={() => {toast.success(`Message sent to ${username}`, {
                theme: "dark",
                
                // icon: ({theme, type}) => <BiMessageCheck color="blue" />
            })}}>
                Send Message
            </button>

            <h2 className="text-white text-3xl underline text-center">Terms and Conditions</h2>

            <ul
                className="list-disc space-y-4 text-white mt-4 ml-4"
            >
                {terms} 
            </ul>
        </div>
    )
}