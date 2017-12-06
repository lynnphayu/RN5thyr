import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem, Thumbnail, Badge } from "native-base";
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';
class Home extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon, { active: true, name: "menu", onPress: () => this.props.navigation.navigate("DrawerOpen") }))),
                React.createElement(Body, null,
                    React.createElement(Title, null, "Actives")),
                React.createElement(Right, null)),
            React.createElement(Content, { style: { flex: 1 } }, this.renderHomeContent())));
    }
    renderHomeContent() {
        if (this.props.isLoading)
            return React.createElement(Spinner, { type: "Wave" });
        return React.createElement(List, { style: styles.list }, this.props.list.map((item, i) => (React.createElement(ListItem, { avatar: true, key: i, onPress: () => this.props.navigation.navigate("ChatScene", {
                name: item.name,
                id: item.id
            }) },
            React.createElement(Left, null,
                React.createElement(Thumbnail, { source: { uri: "https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" } })),
            React.createElement(Body, null,
                React.createElement(Text, null, item.name),
                React.createElement(Text, { note: true }, "Doing what you like will always keep you happy . .")),
            React.createElement(Right, null,
                React.createElement(Text, { note: true }, "3:43 pm"),
                React.createElement(Badge, { success: true, style: { marginTop: 5 } },
                    React.createElement(Text, null, item.new_msg)))))));
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flex: 1,
    }
});
export default Home;
//# sourceMappingURL=index.js.map