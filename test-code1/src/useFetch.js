import { useState , useEffect } from "react";

function useFetch(url){
    const [isPending , setIsPending] = useState(true);
    const [error , setError] = useState(null);
    const [data , setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error ("Could not load data")
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(error => {
                setError(error.message)
                setIsPending(false)
            })
    },[url])
    return {isPending , data , error}
}
export default useFetch;