import './App.css';
import Products from './Products';
import Cart from './Cart';
import Users from './Users';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

function App() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Products/>
                </Route>
                <Route path="/carts" >
                    <Cart/>
                </Route>
                <Route path="/users" >
                    <Users/>
                </Route>
            </Switch>
        </Router>
    )
}
export default App;