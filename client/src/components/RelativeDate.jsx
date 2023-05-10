import formatDistance from 'date-fns/formatDistance'

export default function RelativeDate({date}) {
    const result = formatDistance( date, Date.now(), {addSuffix: true})
    
    return (
        <div className=' text-xs absolute bottom-1 right-0 px-2 text-gray-300'>
            <p>{result}</p>
        </div>
    )
}