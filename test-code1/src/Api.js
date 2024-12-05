import {useState } from 'react';
import useFetch from './useFetch';
function Api(){
    const [route , setRoute] = useState("product")
    const {data , isPending , error } = useFetch(`https://fakestoreapi.com/${route}`);
    return ( 
        <div>
            <h1>Welcome to the API page</h1>
            {error && <div>{error} </div> }
            {isPending && <div>Loading....</div> }
            <div>
                <button onClick={()=> setRoute("products")}>PRODUCTS INFO</button>
            </div>
            {data.map(products => 
                <div key={products.id}>
                    <h2>Title: {products.title} </h2>
                    <p>Description: {products.description}</p>
                </div>
            )}
        </div>
     );
}
export default Api;