import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Profile from './Profile';
import Api from './Api.js';
import Cart from './Cart';
function App() {
    return(
      <Router>
        <Switch>
          <Route path="/" exact >
            <Profile/>
          </Route>
          <Route path="/api">
            <Api/>
          </Route>
          <Route path="/carts">
            <Cart/>
          </Route>
        </Switch>
      </Router>
    )
}
export default App;