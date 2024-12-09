import useFetch from "./useFetch"
export default function Users(){
    const {data , isLoading , error} = useFetch('https://fakestoreapi.com/users')
    return(
        <div>
            <h1>Welcome to the Users section</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p> {error} </p>}

            <div>
                {data.map(Users =>
                    <div key={Users.id}>
                        <p>{Users.email}</p>
                    </div>
                )}
            </div>
        </div>
    )
};