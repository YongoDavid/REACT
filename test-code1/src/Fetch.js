export default function Fetch(props){
    const data = props.data;
    const loading = props.loading;
    const setRoute = props.setRoute;
    return(
        <div>
            <h1>Testing Fetch API</h1>
            { loading && <h2>Loading Data...</h2>}
            <button onClick={()=> setRoute('products')}>Click</button>
            {data.map(product => 
                <div key={product.id}>
                    <h3>Title: {product.title}</h3>
                    <h3>Description: {product.description}</h3>
                </div>
            )}
        </div>
    )
}