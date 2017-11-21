import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import EntrySc from "./container/EntryScContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import QrScanner from "./container/QrScannerContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Entry: { screen: EntrySc },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
		QrScanner: { screen: QrScanner}
	},
	{
		initialRouteName: "Entry",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
