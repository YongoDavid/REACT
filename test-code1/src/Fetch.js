import {useState , useEffect} from 'react';
export default function Fetch(){
    const [loading, setIsLoading] = useState(true);
    const [data , setData] = useState([]);
    const [route , setRoute] = useState('product');
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/${route}`)
            .then(response => {
                setIsLoading(true)
                return response.json()
            })
            .then(json =>{
                setIsLoading(false)
                setData(json)
            })
    },[route])
    return(
        <div>
            <h1>Testing Fetch API</h1>
            { loading && <h2>Loading Data...</h2>}
            <button onClick={()=> setRoute('products')}>Click</button>
            {data.map(product => 
                <div key={product.id}>
                    <h3>Title: {product.title}</h3>
                    <h3>Description: {product.description}</h3>
                </div>
            )}
        </div>
    )
}