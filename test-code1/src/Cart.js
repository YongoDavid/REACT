import { useState } from "react";
import useFetch from "./useFetch"
export default function Cart(){
    const [route , setRoute] = useState();
    const {data } = useFetch(`https://fakestoreapi.com/${route}`);
    return(
        <div>
            <h1>Welcome to the carts page</h1>
            <button onClick={() => setRoute('carts')}>CONNECT</button>
            <div>
                {data.map(cart => 
                    <div key={cart.id}>
                        <p>Date: {cart.date}</p>
                    </div>
                )}
            </div>
        </div>
    )
}