import { useEffect , useState } from "react";
export default function useFetch(){
    const [loading, setIsLoading] = useState(true);
    const [data , setData] = useState([]);
    const [route , setRoute] = useState('product');
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://fakestoreapi.com/${route}`)
            .then(response => response.json())
            .then(json =>{
                setData(json)
                setIsLoading(false)
            })
            .catch(error => {
                console.error("Fetch error:", error);
                setIsLoading(false);
            });
    },[route])
    return{loading, data, setRoute}
}