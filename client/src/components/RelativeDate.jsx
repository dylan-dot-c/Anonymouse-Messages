import formatDistance from 'date-fns/formatDistance'

export default function RelativeDate(props) {
    const result = formatDistance( props.date, Date.now(), {addSuffix: true})
    return (
        <div className='absolute bottom-1 right-0 px-2 text-gray-300'>
            {/* <p>{props.date}</p> */}
            <p>{result}</p>
        </div>
    )
}