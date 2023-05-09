import axios from "axios"
import { useState , useContext , useEffect} from "react"
import userContext from "../../../contexts/userContext"
import { useParams} from "react-router-dom"
import generateRandomNickname from "../../utilities/nameGenerator"

export default function SendMessage() {

    // add a greyed out placeholder in the message box

    const { username } = useParams()

    const [anonymousName , setAnonymousName] = useState("Random Noob");
    const [charCount, setCharCount] = useState(0)
    const [message, setMessage] = useState("")

    const {user , setUser} = useContext(userContext);

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
    }

    async function handleMessageSubmission(){
        // make a post request to add a message to the account of the user

        // user.id - to tell who's account the message should be added to
        // content of message = what is being said
        // sender - random name assigned to the person sending
            // (prolly ensure its not the person who created the link)
        // dateSent is automatically generated
      
        const messageEndPoint = `http://localhost:3000/messages/${username}`;
        const messageData = {
            username : username,
            sender : anonymousName,
            content : message,
        }

        console.log("hey")
        try {
            const message  = await axios.post(messageEndPoint, messageData);
            // toast to indicate success sending the message 
        }
        catch {
            // add toast to indicate failure sending the message
        }
    }

    let terms = conditions.map( (condition, index) => {
        return (
            <li key={index}>
                {condition}
            </li>
        )
    }
    )

    useEffect(function(){
      const storedAnonymousName = localStorage.getItem("AnonName");
    
      
      if(storedAnonymousName){
        setAnonymousName(storedAnonymousName);
      } else{
          
        const randomAnonymousNickname = generateRandomNickname();
       
        setAnonymousName(randomAnonymousNickname);
        localStorage.setItem("AnonName" , randomAnonymousNickname );
     }
    
    }, [])
    
    return (
        <div className="my-20 container mx-auto bg-gray-800 px-6 py-10 max-w-[800px]">
            <h1
                className="text-2xl md:text-4xl text-center text-white/90 "
            >Send a secret message to <span className="text-green-400 underline font-bold">{username}</span></h1>

            <p className="text-white my-4 text-xl"> You are <span className="text-purple-400 underline">{anonymousName && anonymousName}</span></p>

            <p className={`text-right ${message.length===255 ? "text-red-500": "text-white"}`}>{message.length}/255</p>

            <textarea name="message" id="" cols="30" rows="10" maxLength="255"
                className="text-white px-4 py-4 bg-gray-700 rounded-lg outline-0 resize-none w-full md:w-4/5 mx-auto ring-2 block  ring-green-400"
                onChange={handleChange}
                placeholder={`Send a message...`}
                ></textarea>
            <button className="text-white px-4 py-3 rounded bg-green-600 shadow-lg block my-4 mx-auto" 
            onClick={handleMessageSubmission}>
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