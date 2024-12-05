import {useState} from 'react';
import useFetch from './useFetch';
function Cart(){
    const [route , setRoute] = useState("cart")
    const {data , isPending , error } = useFetch(`https://fakestoreapi.com/${route}`);
    return (
        <div>
            <h1>Welcome to the CART page</h1>
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            <div>
                <button onClick={()=> setRoute("carts")}>CARTS INFO</button>
            </div>
            {data.map(carts => 
                <div key={carts.id}>
                    <p>Description: {carts.products}</p>
                </div>
            )}
        </div>
    )
}

export default Cart;