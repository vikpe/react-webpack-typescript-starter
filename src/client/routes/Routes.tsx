import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import SubRoute from './test-route';
import { hot } from 'react-hot-loader';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/subroute">Sub route</Link>
        </li>
      </ul>
      <hr />
      <Route path="/subroute" render={props => <SubRoute text="test" {...props} />} />
    </div>
  );
};

export default hot(module)(App);

