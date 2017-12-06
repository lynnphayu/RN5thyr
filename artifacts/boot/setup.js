import * as React from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "../App";
import getTheme from "../../native-base-theme/components";
import variables from "../theme/variables/platform";
import io from 'react-native-socket.io-client';
export default class Setup extends React.Component {
    constructor(props) {
        super(props);
        var socket = io('http://192.168.43.103:3030');
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({ isLoading: false }), socket),
        };
    }
    render() {
        return (React.createElement(StyleProvider, { style: getTheme(variables) },
            React.createElement(Provider, { store: this.state.store },
                React.createElement(App, { store: this.state.store }))));
    }
}
//# sourceMappingURL=setup.js.map