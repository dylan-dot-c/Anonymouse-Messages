
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import generateRandomNickname from "../../utilities/nameGenerator";

export default function SendMessage() {
    const { username } = useParams();

    const [anonymousUser, setAnonymousUser] = useState({
        name: "Random Noob",
        id: uuidv4(),
    });
    const [charCount, setCharCount] = useState(0);
    const [message, setMessage] = useState("");
    const [userId, setUserId] = useState(null);

    const conditions = [
        "Please keep messages fun, kind and respectful. We do not tolerate cyberbullying.",
        "Messages sent here are encrypted to ensure safe transmission to and from our server.",
        "Anyone can send an anonymous message, a user doesn't have to be signed in to send a message.",
    ];

    function handleChange(event) {
        const { value } = event.target;
        const length = value.length;

        setMessage((prev) => {
            return value;
        });
        setCharCount(length);
    }

    async function handleMessageSubmission() {
        const messageEndPoint = `http://localhost:3000/messages/${username}`;

        async function determineIfUserExists() {
            return await axios
                .get(`http://localhost:3000/user/${username}`)
                .then((response) => setUserId(response.data));
        }

        await determineIfUserExists().then(async function () {
            if (!userId) {
                // create a toast to indicate that you can't send a message to that person
                return;
            }

            const messageData = {
                username: username,
                sender: anonymousUser.name,
                content: message,
                senderId: anonymousUser.id,
                recipient: username,
                recipientId: userId,
            };

            try {
                await axios.post(messageEndPoint, messageData);

                // toast to indicate success sending the message
            } catch (error) {
                const errorStatus = error.response.data.s;

                console.log(messageData);
                // Please use appropriate toast messages and not what I write in comments

                switch (errorStatus) {
                    case 404:
                        // The user was not found
                        break;
                    case 401:
                        // creating the message failed - prolly bad request
                        break;
                    case 500:
                        // server error :(
                        break;
                    default:
                    // Unknown error
                }
            }
        });
    }

    let terms = conditions.map((condition, index) => {
        return <li key={index}>{condition}</li>;
    });

    useEffect(function () {
        const storedAnonymousUser = localStorage.getItem("AnonUser");

        if (storedAnonymousUser) {
            setAnonymousUser(JSON.parse(storedAnonymousUser));
        } else {
            const randomAnonymousNickname = generateRandomNickname();

            const randomAnonymousUser = {
                id: uuidv4(),
                name: randomAnonymousNickname,
            };

            setAnonymousUser(randomAnonymousUser);
            localStorage.setItem(
                "AnonUser",
                JSON.stringify(randomAnonymousUser)
            );
        }
    }, []);

    return (
        <div className="my-20 container mx-auto bg-gray-800 px-6 py-10 max-w-[800px]">
            <h1 className="text-2xl md:text-4xl text-center text-white/90 ">
                Send a secret message to{" "}
                <span className="text-green-400 underline font-bold">
                    {username}
                </span>
            </h1>

            <p className="text-white my-4 text-xl">
                {" "}
                You are{" "}
                <span className="text-purple-400 underline">
                    {anonymousUser && anonymousUser.name}
                </span>
            </p>

            <p
                className={`text-right ${
                    message.length === 255 ? "text-red-500" : "text-white"
                }`}
            >
                {message.length}/255
            </p>

            <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                maxLength="255"
                className="text-white px-4 py-4 bg-gray-700 rounded-lg outline-0 resize-none w-full md:w-4/5 mx-auto ring-2 block  ring-green-400"
                onChange={handleChange}
                placeholder={`Send a message...`}
            ></textarea>
            <button
                className="text-white px-4 py-3 rounded bg-green-600 shadow-lg block my-4 mx-auto"
                onClick={handleMessageSubmission}
            >
                Send Message
            </button>

            <h2 className="text-white text-3xl underline text-center">
                Terms and Conditions
            </h2>

            <ul className="list-disc space-y-4 text-white mt-4 ml-4">
                {terms}
            </ul>
        </div>
    );
}