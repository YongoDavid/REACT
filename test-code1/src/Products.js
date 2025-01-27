import {useState , useEffect} from 'react';
import axios from 'axios';
export default function Product(){
    const [point , setPoint] =  useState('product');
    const [data , setData] = useState([]);

    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/${point}`)
            .then(response => setData(response.data))
            .catch(err => {
                return err.message
            })
    },[point])
    return(
        <div className="main-section">
            <h1>Welcome to the products section</h1>
            <button onClick={()=> setPoint("products")}>
                click here
            </button>
            {data.map((products) => 
                <div key={products.id}>
                    <h3>Title: {products.title}</h3>
                    <h3>Description: {products.description}</h3>
                </div>
            )}
        </div>
    )
}