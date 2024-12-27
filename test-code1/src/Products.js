import {useState , useEffect} from 'react';
export default function Products(){
    const [fetchData , setFetchData] = useState("/product");
    const [data , setData] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState(null);
    

    useEffect(() => {
        fetch(`https://fakestoreapi.com/${fetchData}`)
            .then(response => {
                if(!response.ok){
                    throw Error("Could not fetch Data")
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(error => {
                setIsLoading(false)
                setError(error.message)
            })
    })
    return(
        <div className="man">
            <h1>Welcome to the Product</h1>
            {isLoading && <h5>Loading...</h5>}
            {error && <h5>{error}</h5>}
            <button onClick={() => setFetchData("products")}>fetch</button>

            {data.map(product => 
                <div key={product.id}>
                    <h3>Title: {product.title}</h3>
                    <h3>Description: {product.description}</h3>
                </div>
            )}
        </div>
    )
}