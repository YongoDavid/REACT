import './App.css';
import Products from './Products';
import Cart from './Carts';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

function App() {
    return(
       <Router>
        <Switch>
            <Route path="/" exact > 
                <Products/>
            </Route>
        </Switch>
       </Router>
    )
}
export default App;