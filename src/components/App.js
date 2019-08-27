import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import history from '../history';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import GroupPage from './group/GroupPage';
import GroupCreate from './group/GroupCreate';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={GroupPage} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/groups/create" exact component={GroupCreate} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
