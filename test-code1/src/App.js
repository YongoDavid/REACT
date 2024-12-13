import './App.css';
import Cart from './Cart';
import Products from './Products';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

function App() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Products/>
                </Route>
                <Route path="/carts">
                    <Cart/>
                </Route>
            </Switch>
        </Router>
    )
}
export default App;