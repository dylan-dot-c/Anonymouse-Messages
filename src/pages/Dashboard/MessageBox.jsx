import {MdOutlineContentCopy} from "react-icons/md"
import RelativeDate from "./RelativeDate"

export default function MessageBox(props) {

    const {message, date} = props
    return (
        <div className="relative bg-slate-600 text-white min-h-[100px] rounded-2xl p-4 pb-8 w-full md:w-3/5 mx-auto">
            <div className="absolute h-full flex justify-center items-center top-0 -left-10">
                <div className="arrow"></div>
            </div>

            <p>{message}</p>
            <span className="absolute bottom-2 left-0 px-4"><MdOutlineContentCopy size={20} className="hover:cursor-pointer text-slate-400 hover:text-green-400" /></span>

            <RelativeDate date={date} />
        </div>
    )
}