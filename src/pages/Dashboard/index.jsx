import MessageBox from "./MessageBox"
import { useState, useEffect } from "react"

import axios from "axios"

export default function Dashboard() {

    const [token, setToken] = useState("")
    const [userData, setUserData] = useState({})
    const [messages, setMessages] = useState([])

    useEffect(  () => {

        // const info = JSON.stringify(localStorage.getItem('token'))

        const token = localStorage.getItem('token');
        async function verify() {
          if (token == null) {
            alert("You are not signed in");
          } else {
            try {
              const result = await axios.post("http://127.0.0.1:3000/users/verify", {token: token});
              console.log("result is datatoken", result.data.tokenData);
              setUserData(result.data.tokenData)
            } catch (error) {
              console.log("Error:", error);
            }
          }
        }
        verify()

      


    }, [])

    useEffect( ()=> {
        async function getMessages() {
            const user_id = userData.id
            console.log("userdata is", userData, userData.id)

            const result = await axios.get(`http://127.0.0.1:3000/messages/${user_id}`)
            setMessages(result.data)
            console.log(result)
        } 
        getMessages()
    }, [userData])

    const messageboxes = messages.map( (message, index) => {
        return (
            <MessageBox key={index} message={message.message_text} date={message.time_sent} />
        )
    })


    return (
        <div className="container mx-auto max-w-[800px] p-6 bg-gray-700 mt-16 min-h-screen">

            <div className="border-b border-b-gray-800 pb-4 mb-4 text-white/80 space-y-4">
                <p>Welcome back <span className="text-3xl text-green-400 font-semibold">{userData.username}</span></p>
                <p>You currently have a total of <span className="text-green-400 underline">{messages.length}</span> message(s)</p>

                <p>Use this link to share with your friends so they can send anonymous messages</p>

                <p className="bg-gray-800 text-green-400 p-4 relative text-sm">
                    {`https://localhost:5173/#/send/${userData.username}`}
                </p>
            </div>

        <div className="space-y-6">
        {messageboxes}
        </div>
            
  

  {/* <MessageBox message={} /> */}

        </div>
    )
}