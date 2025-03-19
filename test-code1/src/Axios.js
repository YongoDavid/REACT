import {useState , useEffect} from 'react'
import axios from 'axios'
export default function Axios(){
    const [click , setClick] = useState('products')
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://dummyjson.com/${click}`)
        .then(response =>{
            setData(response.data)
            setIsLoading(false)
        })
    })
    return(
        <div className="main">
            {isLoading && <h2>Loading data...</h2>}
            <button onClick={()=> setClick('products')}>Click</button>
            <div>
                {data.map(products)(
                    <div key={products.id}>
                        <h3>Title: {products.title} </h3>
                        <h3>Description: {products.description} </h3>
                    </div>
                )}
            </div>
        </div>
    )
}