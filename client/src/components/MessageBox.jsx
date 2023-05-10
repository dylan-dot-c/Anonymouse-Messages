// import {MdOutlineContentCopy} from "react-icons/md"
import RelativeDate from "./RelativeDate"
import Sender from "./Sender"
import userContext from "../../contexts/userContext"
import { useContext, useEffect, useState } from "react"


export default function MessageBox({ message: content, date, sender, senderId, userToReplyTo, setUserToReplyTo }) {
    const { user, setUser } = useContext(userContext);
    const [isUserMessage, setIsUserMessage] = useState(false)

    // The width should be determine by the size of the text but be careful

    useEffect(function () {

        if (user._id === senderId) {
            setIsUserMessage(true);
        }
    }, [])

    return (
     <div style={{ width: 400 }} className={`relative bg-${isUserMessage ? "green" : "slate"}-${isUserMessage ? 400 : 600} text-white ${!isUserMessage && "border"} min-h-[50px] rounded-2xl p-4 pb-8 w-full md:w-3/5 ml-3 ${isUserMessage && "ml-auto mr-10"}`}>

     <p>{content}</p>
            <span className="bg-black-700">
                <Sender name={sender} id={senderId}
                    isUserMessage={isUserMessage}
                    userToReplyTo={userToReplyTo}
                    setUserToReplyTo={setUserToReplyTo} />
            </span>
            <RelativeDate date={date} />
        </div>
    )
}