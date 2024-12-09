import {useState , useEffect} from 'react';
export default function useFetch(url){
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState(null);
    const [data , setData] = useState([])

    useEffect(()=>{
        fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw Error('could not load data')
                }
                return response.json()
            })
            .then(data =>{
                setIsLoading(false)
                setError(null)
                setData(data)
            })
            .catch(Error =>{
                setData(false)
                setIsLoading(false)
                setError(Error.message)
            })
    })
    return {data , isLoading , error}
}