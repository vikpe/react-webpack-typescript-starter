import * as React from "react";

require("!style-loader!css-loader!sass-loader!./App.scss");

const reactLogo = require('./react_logo.svg');

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return <div className="app">
            <h1>Hello World!</h1>
            <p>Foo to the barz</p>
            <img src={reactLogo}/>
        </div>;
    }
}
