// import {MdOutlineContentCopy} from "react-icons/md"
import RelativeDate from "./RelativeDate"
import Sender from "./Sender"

export default function MessageBox(props) {
    console.log("the props ", props )
    return (
        <div className="relative bg-slate-600 text-white min-h-[50px] rounded-2xl p-4 pb-8 w-full md:w-3/5 mx-auto">
            <div className="absolute h-full flex justify-center items-center top-0 -left-10">
                <div className="arrow"></div>
            </div>
            <p>{props.message}</p>
            <span className="bg-red-100">
                {/* This will prolly be used somewhere else */}
                {/* <MdOutlineContentCopy size={20} className="hover:cursor-pointer text-slate-400 hover:text-green-400" /> */}
                <Sender name={props.sender}/>
            </span>
            <RelativeDate date={props.date} />
        </div>
    )
}