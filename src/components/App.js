import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import Listing from '../containers/Listing';
import Favourites from '../containers/Favourites';
import Home from './Home';
import Signup from '../containers/Signup';
import Login from '../containers/Login';

function App() {
  const isAuth = useSelector(store => store.auth.isAuth);

  return (
    <BrowserRouter>

      {
          isAuth ? (
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/listing/:id" component={Listing} />
              <Route exact path="/favourites" component={Favourites} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
            </Switch>
          )
        }

    </BrowserRouter>
  );
}

export default App;
