import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        // <div className='MyRouter'>

        <Router>
            {/* <header className='header'>
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
            </header> */}
            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Nav.Link width={"25%"} href="/">תרום מידע</Nav.Link>
                    <Nav.Link width={"25%"}href="connect">התחבר למערכת הלוח</Nav.Link>
                    <Nav.Link width={"25%"}href="Help">דוגמא ללוח</Nav.Link>
                    <Nav.Link width={"25%"}href="Tfila">תפילה בציבור</Nav.Link>
                    <Nav.Link className='logo' width={"25%"} ><span  >עזרה לחיים יהודיים</span></Nav.Link>
                </Nav>
            </Navbar>
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
        // </div>
    );
}
export default MyRouter;