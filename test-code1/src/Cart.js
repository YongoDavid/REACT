import useFetch from "./useFetch"
export default function Cart(){
    const {data , isLoading , error} = useFetch('https://fakestoreapi.com/carts');
    return(
        <div>
            <h1>Welcome to the Carts page</h1>
            {isLoading && <p> Loading... </p>}
            {error && <p>{error}</p>}

            <div>
                {data.map(Cart =>
                    <div key={Cart.id}>
                        <p>{Cart.date}</p>
                    </div>
                )}
            </div>
        </div>                                                              
    )
};