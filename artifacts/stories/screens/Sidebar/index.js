import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import { NavigationActions } from "react-navigation";
const routes = [
    {
        route: "Home",
        caption: "Actives",
    },
    {
        route: "BlankPage",
        caption: "Contacts",
    },
    {
        route: "Entry",
        caption: "Logout",
    },
];
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Entry" })],
});
export default class Sidebar extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Content, null,
                React.createElement(List, { style: { marginTop: 40 }, dataArray: routes, renderRow: data => {
                        return (React.createElement(ListItem, { button: true, onPress: () => {
                                if (data.route === "Entry") {
                                    this.props.navigation.dispatch(resetAction);
                                    this.props.partialDisconnect();
                                }
                                else
                                    this.props.navigation.navigate(data.route);
                            } },
                            React.createElement(Text, null, data.caption)));
                    } }))));
    }
}
//# sourceMappingURL=index.js.map