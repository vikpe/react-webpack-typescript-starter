import * as React from 'react';
import * as Loadable from 'react-loadable';

const Loading = () => {
  return <div>test</div>;
};

const LoadableComponent = Loadable({
  loader: () => import('./dashboard'),
  loading: Loading,
});

export default class LoadableDefault extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
