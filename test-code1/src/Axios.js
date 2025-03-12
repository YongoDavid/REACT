import {useState , useEffect} from 'react';
import axios from 'axios';
export default function Axios(){
    const [data , setData] = useState([]);
    const [loading , isLoading] = useState(true)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => 
            setData(response.data),
            setTimeout(() => {
                isLoading(false)
            }, 1000),
        )
    },[])
    return(
        <div className="main">
            <h1>Axios</h1>
            { loading && <h3>LOADING. . . . .</h3>}
            {data.map(product => (
                <div key={product.id}>
                    <p>Tile: {product.title}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))}
        </div>  
    )
}