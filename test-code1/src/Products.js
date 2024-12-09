import useFetch from "./useFetch"
export default function Products(){
    const { data , isLoading , error} = useFetch('https://fakestoreapi.com/products');
    return (
        <div>
            <h1>Welcome to the Products section</h1>
            {isLoading && <p>Loading data</p>}
            {error && <p> {error} </p>}

            <div>
                {data.map(Products => 
                    <div key={Products.id}>
                        <p>Title: {Products.title}</p>
                        <p>Description: {Products.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
