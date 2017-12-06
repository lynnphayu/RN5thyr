import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
import EntrySc from "./container/EntryScContainer";
import Home from "./container/HomeContainer";
import ChatScene from "./container/ChatSceneContainer";
import Sidebar from "./container/SidebarContainer";
import QrScanner from "./container/QrScannerContainer";
const Drawer = DrawerNavigator({
    Home: { screen: Home },
}, {
    drawerWidth: deviceWidth - 50,
    drawerPosition: "left",
    contentComponent: props => React.createElement(Sidebar, Object.assign({}, props)),
});
const App = StackNavigator({
    Entry: { screen: EntrySc },
    ChatScene: { screen: ChatScene },
    Drawer: {
        screen: Drawer, navigationOptions: {
            gesturesEnabled: false,
        },
    },
    QrScanner: { screen: QrScanner }
}, {
    initialRouteName: "Entry",
    headerMode: "none",
});
const prevGetStateForAction = App.router.getStateForAction;
App.router.getStateForAction = (action, state) => {
    // Do not allow to go back from Home
    if (action.type === 'Navigation/BACK' && state && state.routes[state.index].routeName === 'Drawer') {
        return null;
    }
    // Do not allow to go back to Login
    if (action.type === 'Navigation/BACK' && state) {
        const newRoutes = state.routes.filter(r => r.routeName !== 'QrScanner');
        const newIndex = newRoutes.length - 1;
        return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
    }
    return prevGetStateForAction(action, state);
};
function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}
export default (props) => (React.createElement(Root, null,
    React.createElement(App, { onNavigationStateChange: (prevState, currentState) => {
            const currentScreen = getCurrentRouteName(currentState);
            const prevScreen = getCurrentRouteName(prevState);
            if (currentScreen === "ChatScene")
                props.store.dispatch({ type: "MESSAGE_SEEN" });
        } })));
//# sourceMappingURL=App.js.map