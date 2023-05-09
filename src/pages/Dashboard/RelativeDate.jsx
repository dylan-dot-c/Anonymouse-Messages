import formatDistance from 'date-fns/formatDistance'

export default function RelativeDate(props) {

    // const dateSent = props.date
    // console.log(dateSent)

    const result = formatDistance( new Date(props.date), Date.now(), {addSuffix: true})
    return (
        <div className='absolute bottom-1 right-0 px-2 text-gray-300'>
            {/* <p>{props.date}</p> */}
            <p>{result}</p>
        </div>
    )
}