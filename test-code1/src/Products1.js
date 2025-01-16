import {useState , useEffect} from 'react';
export default function Products1(props){
    const url = props.url
    const [data , setData] = useState([]);
    useEffect((url) => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
    })
    return(
        <div>
            <h2>List of all product prices</h2>
            {data.map(product => 
                <div key={product.id}>
                    <h4>Price: {product.price}</h4>
                    <h4>Category: {product.category}</h4>
                </div>
            )}
        </div>
    )
}