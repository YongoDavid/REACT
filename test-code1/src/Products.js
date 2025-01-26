import axios from 'axios';
import {useEffect, useState} from 'react';
export default function Products(){
    const [data , setData] = useState([])
    const [point , setPoint] = useState('product')
    useEffect(() =>{
        axios
            .get(`https://fakestoreapi.com/${point}`)
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                return err.message
            })
    },[point])
    return(
        <div>
            <h1>Welcome all products</h1>
            <button onClick={() => setPoint('products')}>
                Click here
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