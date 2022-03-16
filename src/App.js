import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProducts from './components/AddProducts/AddProducts';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/addProducts">
            <AddProducts />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
