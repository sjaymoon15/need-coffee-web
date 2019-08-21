import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import history from '../history';
import GroupList from './groups/GroupList';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={GroupList} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
