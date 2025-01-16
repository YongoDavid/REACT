// import { useState , useEffect } from "react";
// export default function Cart() {
//     // const [fetchData , setFetchData] = useState("cart");
//     const [data , setData] = useState([]);
//     const [isLoading , setIsLoading] = useState(true)
//     const [error , setError] = useEffect(null)

//     useEffect(() =>{
//         fetch('https://fakestoreapi.com/carts')
//             .then(response => {
//                 if(!response.ok){
//                     throw Error('Could not fetch data')
//                 }
//                 return response.json()
//             })
//             .then(data => {
//                 setIsLoading(false)
//                 setError(null)
//                 setData(data)
//             })
//             .catch(error =>{
//                 setIsLoading(false)
//                 setError(error.message)
//             })
//     })
//     return(
//         <div className="main">
//             <h1>Welcome to carts</h1>
//             {isLoading && <h5>Loading carts</h5> }
//             {error && <h5>{error}</h5>}

//             {data.map(cart => 
//                 <div key={cart.id}>
//                     <h3>Products:{cart.id}</h3>
//                 </div>
//             )}
//         </div>
//     )
// }