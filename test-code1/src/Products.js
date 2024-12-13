import { useState } from "react";
import useFetch from "./useFetch";
export default function Products(){
    const [route , setRoute] = useState();
    const {data } = useFetch(`https://fakestoreapi.com/${route}`);
    return(
        <div>
            <h1>Welcome to the Products page</h1>
            <button onClick={() => setRoute('products')}>CONNECT</button>

            <div>
                {data.map(product => 
                    <div key={product.id}>
                        <p>Title: {product.title}</p>
                        <p>Description: {product.description}</p>
                    </div>
                )}
            </div>

        </div>
    )
}