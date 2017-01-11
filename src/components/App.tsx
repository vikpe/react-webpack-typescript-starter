import * as React from 'react';

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return <div>
            <h1>Hello World!</h1>
            <p>Foo to the bar</p>
        </div>;
    }
}
