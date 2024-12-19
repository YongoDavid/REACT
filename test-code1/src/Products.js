import useFetch from './useFetch';
export default function Products(){
    const {isLoading , error , data } = useFetch('https://fakestoreapi.com/products')
    
    return(
        <div>
            <h1>All products</h1>
            {isLoading && <p>Loading</p>}
            {error && <p> {error} </p>}

            <div>
                {data.map(products => 
                    <div key={products.id}>
                        <p>Title: {products.title}</p>
                        <p>Description: {products.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}