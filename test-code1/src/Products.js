import {useState , useEffect} from "react";
import Products1 from "./Products1";
export default function Products(){
    const [data , setData] = useState([])
    const url = "https://fakestoreapi.com/products"
    useEffect(()=> {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
    });
    return(
        <div>
            <h1>Welcome to all products</h1>
            {data.map(product => 
                <div key={product.id}>
                    <h4>Name: {product.title}</h4>
                    <h4>Description: {product.description}</h4>
                </div>
            )}
            <Products1 url={url}/>
        </div>
    )
}