export default function Sender({ name, id, setUserToReplyTo, isUserMessage }) {
    return (
        <div className={`text-xs absolute bottom-1 left-0 px-2 text-${isUserMessage ? "green" : "slate"}-300`}>
            <button onClick={function () {setUserToReplyTo({ name, id });}}>
                reply to {name}
            </button>
        </div>
    );
}