import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import LodableDefault from './default';

export interface ISubRoute {
  text: string;
  match: any;
}

class SubRoute extends React.Component<ISubRoute, {}> {
  render() {
    const { text, match } = this.props;
    return (
      <div>
        <div>
          <ul>
            <li>
              <Link to={`${match.url}`}> Default Router Of Sub component</Link>
            </li>
            <li>
              <Link to={`${match.url}/subRoute1`}>Subroute 1</Link>
            </li>
          </ul>
          <hr />
          <Route
            exact
            path={`${match.url}/`}
            render={() => <div>Default Route </div>}
          />
          <Route
            exact
            path={`${match.url}/subRoute1`}
            render={() => <LodableDefault />}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(SubRoute);
