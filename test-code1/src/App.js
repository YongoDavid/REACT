import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Fetch from './Fetch';
import Axios from './Axios';
function App() {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Fetch/>
                </Route>
                <Route path="/axios">
                    <Axios/>
                </Route>
            </Switch>
        </Router>
    );
}
export default App;