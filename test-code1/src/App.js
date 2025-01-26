import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Products from './Products';
function App() {
    return(
        <Router>
            <Switch>
                <Route exact>
                    <Products/>
                </Route>
            </Switch>
        </Router>
    );
}
export default App;