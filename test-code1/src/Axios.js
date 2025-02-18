import axios from 'axios';
import {useState , useEffect} from 'react';
export default function Axios(){
    const [loading, setLoading] = useState(true);
    const [data , setData] = useState([]);
    const [route , setRoute] = useState('product');

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/${route}`)
        .then(response =>{
            setLoading(false)
            setData(response.data)
        })
    },[route])
    return(
        <div>
            <h1>Axios Test</h1>
            {loading && <h3>Loading Data...</h3>}
            <button onClick={() => setRoute('products')}>Click</button>
            {data.map(product => 
                <div key={product.id}>
                    <h3>Title: {product.title}</h3>
                    <h3>Description: {product.description}</h3>
                </div>
            )}
        </div>
    )
}