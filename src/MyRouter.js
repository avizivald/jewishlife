import React from 'react';
import './MyRouter.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Main from './Main';
import Help from './Help';
import Tfila from './Tfila';
function MyRouter() {
    return (
        <div className='MyRouter'>

            <Router>
                <header className='header'>
                    <h1>App</h1>
                    <ul >
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/Help">Help</Link>
                        </li>
                        <li>
                            <Link to="/Tfila">tfila</Link>
                        </li>
                    </ul>
                </header>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/Tfila">
                        <Tfila />
                    </Route>
                    <Route path="/Help">
                        <Help />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default MyRouter;