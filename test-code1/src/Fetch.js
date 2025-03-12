import Orders from './dataFetch.json'
export default function Fetch(){
    return(
        <div className="main">
            <p>Fetch AP</p>
            {Orders.map(product => 
                    <table>
                        <thead>
                            <tr>
                                <th>customer</th>
                                <th>items</th>
                                <th>total price</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.items}</td>
                                <td>{product.totalPrice}</td>
                                <td>{product.status}</td>
                            </tr>
                        </tbody>
                    </table>
            )}
        </div>
    )
}