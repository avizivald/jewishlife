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
import Connect from './connect/Connect'
function MyRouter() {
    return (
        <div className='MyRouter'>

            <Router>
                <header className='header'>
                           <span>עזרה לחיים יהודיים</span>
                    <ul >
                        <li className='logo'>
                        </li>
                        <li>
                            <Link to="/">תרום מידע</Link>
                        </li>
                        <li>
                            <Link to="/connect">התחבר למערכת הלוח</Link>
                        </li>
                        <li>
                            <Link to="/Help">דוגמא ללוח</Link>
                        </li>
                        <li>
                            <Link to="/Tfila">תפילה בציבור</Link>
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
                    <Route path="/connect">
                        <Connect />
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