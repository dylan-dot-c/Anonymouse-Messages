export default function handleChange(event) {
    
        const {value, name, type, checked} = event.target

        setFormData( (prev) => {

            return ({
                ...prev,
                [name]: type=="checkbox" ? checked: value,
            })
        })

        console.log(formData)
    
}