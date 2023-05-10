import { useContext, useState, useEffect, useRef } from "react";
import userContext from "../../../contexts/userContext";
import axios from "axios";
import MessageBox from "../../components/MessageBox";

export default function Dashboard() {
    const { user } = useContext(userContext);
    const [messages, setMessages] = useState([]);
    const [userToReplyTo, setUserToReplyTo] = useState({
        name: "Nobody",
        id: "default",
    });
    const [refreshState, setRefreshState] = useState(false);

    const userMessageInputReference = useRef("");

    useEffect(
        function () {
            async function fetchMessages() {
                try {
                    const response = await axios.get(
                        `http://localhost:3000/messages/${user.username}`
                    );
                    setMessages(response.data.userMessages);

                    // use toast to notify success sending message
                } catch {
                    // use a toast to notify user that the messages cannot be fetched
                }
            }

            if (!userToReplyTo) {
                setUserToReplyTo({ name: "Nobody", id: "default" });
            }
            window.scrollTo(0, document.body.scrollHeight);
            fetchMessages();
        },
        [refreshState, setRefreshState]
    );

    async function handleMessageSubmission() {
        const messageEndPoint = `http://localhost:3000/messages/${user.username}`;

        if (userToReplyTo.name === undefined) {
            setUserToReplyTo({ name: "Nobody", id: "default" });
        }

        const messageData = {
            sender: user.username,
            content: userMessageInputReference.current.value,
            senderId: user._id,
            recipient: userToReplyTo ? userToReplyTo.name : "Nobody",
            recipientId: userToReplyTo ? userToReplyTo.id : "default",
        };

        try {
            await axios.post(messageEndPoint, messageData);
            setRefreshState(!refreshState);
            // toast to indicate success sending the message
        } catch (error) {
            // const errorStatus = error.response.data.s;
            // Please use appropriate toast messages and not what I write in comments

            console.log(error);
            //   switch (errorStatus) {
            //     case 404:
            //       // The user was not found
            //       break;
            //     case 401:
            //       // creating the message failed - prolly bad request
            //       break;
            //     case 500:
            //       // server error :(
            //       break;
            //     default:
            //     // Unknown error
            //   }
            // }
            // })
        }
    }

    return (
        <div className="mt-16 flex  flex-col align-center flext-center justify-center">
            <div className="flex flex-col flext-center border-b border-b-gray-800 pb-4 mb-4 text-white/80 space-y-4">
                <p className="text-3xl text-center">
                    Welcome back ,{" "}
                    <span className="text-3xl text-green-400 font-semibold">
                        {user?.username}
                    </span>
                </p>

                <p className="text-center">
                    You have{" "}
                    <span className="text-green-400 underline">
                        {messages?.length}
                    </span>{" "}
                    message{messages?.length > 1 ? "s" : ""}
                </p>
            </div>
            <div className="container mx-auto max-w-[800px] p-6 bg-gray-700 min-h-screen">
                <div className="space-y-6">
                    {messages.map(function (message, index) {
                        return (
                            <MessageBox
                                key={index}
                                setUserToReplyTo={setUserToReplyTo}
                                userToReplyTo={userToReplyTo}
                                sender={message.sender}
                                senderId={message.senderId}
                                message={message.content}
                                date={new Date(message.dateSent)}
                            />
                        );
                    })}
                </div>

                <div className="">
                    <div className="relative m-10 bottom-1 w-100">
                        <input
                            type={"text"}
                            ref={userMessageInputReference}
                            name="password"
                            id="password"
                            className="floating-input peer"
                        />
                        <label
                            htmlFor="password"
                            className="floating-label bg-transparent-200"
                        >{`Replying to ${userToReplyTo?.name}`}</label>
                    </div>
                    <button
                        type="submit"
                        className="text-white/80 font-bold rounded-lg px-4 py-2 ring-2 ring-green-400 mt-4 transition mx-auto block hover:bg-green-400"
                        onClick={handleMessageSubmission}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
