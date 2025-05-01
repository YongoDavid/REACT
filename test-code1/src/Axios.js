import {useState , useEffect} from 'react'
// import axios from 'axios'
export default function Axios(){
    const [click , setClick] = useState('products')
    const [data , setData] = useState([])

    // useEffect(() => {
    //     axios.get(`https://dummyjson.com/${click}`)
    //     .then(response => setData(response.data))
    // })

    useEffect(() =>{
        fetch(`https://dummyjson.com/${click}`)
            .then(response => response.json)
            .then(json => setData(json))
    })
    return(
        <div className="main">
            <button onClick={()=> setClick('products')}>Click</button>
            {data.map(product => {
                <div key={product.id}>
                    <h3>Title: {product.title} </h3>
                    <h3>Description: {product.description} </h3>
                </div>
            })}
        </div>
    )
}