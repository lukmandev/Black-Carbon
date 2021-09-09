import { Switch, Route } from 'react-router-dom';


// PAGES
import Home from './pages/home';
import User from './pages/user';
import EditProfile from './pages/edit-profile';
import NotFound from './pages/404';


const App = () => {

    return (
    	<Switch>
    		<Route path="/" exact>
    			<Home />
    		</Route>
            <Route path="/user/:id" exact>
                <User />
            </Route>
            <Route path="/edit-profile" exact>
                <EditProfile />
            </Route>
    		<Route>
    			<NotFound />
    		</Route>
        </Switch>
    )
}



export default App;