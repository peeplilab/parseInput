import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Create from './components/create.component';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Great select project</h2>

          <br />
          <Switch>
            <Route exact path='/' component={Create} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
