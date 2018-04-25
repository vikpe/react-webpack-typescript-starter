import * as React from 'react';
import { hot } from 'react-hot-loader';
declare const window: any;

export interface IHelloClassProps { }

class Dashboard extends React.Component<IHelloClassProps, {}> {

  componentDidMount() {
    window.fetch('/api').then((data: any) => console.log(data.text()));
  }

  render() {
    return <div>Class test</div>;
  }
}

export default hot(module)(Dashboard);
