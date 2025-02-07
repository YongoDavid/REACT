import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Fetch from './Fetch';
import Axios from './Axios';
function App() {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Axios/>
                </Route>
                <Route path="/fetch">
                    <Fetch/>
                </Route>
            </Switch>
        </Router>
    );
}
export default App;