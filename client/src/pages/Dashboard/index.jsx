import { useContext , useState , useEffect } from "react"
import userContext from "../../../contexts/userContext"
import axios from "axios";
import MessageBox from "../../components/MessageBox"

export default function Dashboard() {
  const { user } = useContext(userContext);
  const [messages, setMessages] = useState([]);


  function getTimeAgo(timestamp) {
    const currentDate = new Date();
    const date = new Date(timestamp);
    const timeDifferenceInSeconds = Math.floor((currentDate - date) / 1000);
  
    if (timeDifferenceInSeconds < 60) {
      return { unit: 'second', value: timeDifferenceInSeconds };
    } else if (timeDifferenceInSeconds < 3600) {
      const value = Math.floor(timeDifferenceInSeconds / 60);
      return { unit: 'minute', value };
    } else if (timeDifferenceInSeconds < 86400) {
      const value = Math.floor(timeDifferenceInSeconds / 3600);
      return { unit: 'hour', value };
    } else if (timeDifferenceInSeconds < 604800) {
      const value = Math.floor(timeDifferenceInSeconds / 86400);
      return { unit: 'day', value };
    } else if (timeDifferenceInSeconds < 2592000) {
      const value = Math.floor(timeDifferenceInSeconds / 604800);
      return { unit: 'week', value };
    } else if (timeDifferenceInSeconds < 31536000) {
      const value = Math.floor(timeDifferenceInSeconds / 2592000);
      return { unit: 'month', value };
    } else {
      const value = Math.floor(timeDifferenceInSeconds / 31536000);
      return { unit: 'year', value };
    }
  }
  
  
  

  useEffect(() => {
    async function fetchMessages() {
      try{
        const response = await axios.get(`http://localhost:3000/messages/${user.username}`);
        console.log(response.data.userMessages);
        setMessages(response.data.userMessages);
        // use toast to notify success sending message
      }
      catch {
        // use a toast to notify user that the messages cannot be fetched
      }
    } 
        
    fetchMessages();

    

  }, [user.username])
  


  return (
    <div className="container mx-auto max-w-[800px] p-6 bg-gray-700 mt-16 min-h-screen">
      <div className="border-b border-b-gray-800 pb-4 mb-4 text-white/80 space-y-4">
        <p>Welcome back <span className="text-3xl text-green-400 font-semibold">{user?.username}</span></p>
        <p>You currently have a total of <span className="text-green-400 underline">{messages?.length}</span> messages</p>
      </div>

    {/* 
        Add a things for the sender - (Anonymous names will be generated at another time)
        Add a neat scrollbar matching the theme
        Prolly make the bubbles of the chat varying sizes

    */}

      {/* Add the scrollbar on this container */}
      <div className="space-y-6">
        {
          messages.map(function (message, index){ 

            return <MessageBox key={index} sender={message.sender} message={message.content} date={new Date(message.dateSent)} />  
          })
        }
      </div>
    </div>
  );
}
