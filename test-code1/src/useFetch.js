import { useState , useEffect } from "react";
export default function useFetch(url){
    const [isLoading , setIsLoading] = useState(true) 
    const [error , setError] =  useState(null)
    const [data , setData] = useState([])
    

    useEffect(() => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error('Could not access data')
                }
                return response.json();
            })
            .then(data => {
                setIsLoading(false)
                setError(null)
                setData(data)
            })
            .catch(error => {
                setIsLoading(false)
                setError(error.message)
            })
    })
    return {isLoading , error , data}
}