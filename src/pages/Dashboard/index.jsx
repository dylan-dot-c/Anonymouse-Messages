import MessageBox from "./MessageBox"

export default function Dashboard() {

    const messages = [1,1,1,1,1,1,1,1].map( (num, index) => {
        return (
            <MessageBox key={index} message="There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..." />
        )
    })


    return (
        <div className="container mx-auto max-w-[800px] p-6 bg-gray-700 mt-16 min-h-screen">

            <div className="border-b border-b-gray-800 pb-4 mb-4 text-white/80 space-y-4">
                <p>Welcome back <span className="text-3xl text-green-400 font-semibold">Username!</span></p>
                <p>You currently have a total of <span className="text-green-400 underline">{Math.floor(Math.random() * 10)}</span> messages</p>
            </div>

        <div className="space-y-6">
        {messages}
        </div>
            
  

  {/* <MessageBox message={} /> */}

        </div>
    )
}