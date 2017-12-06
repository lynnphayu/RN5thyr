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

export interface Props {
	navigation: any;
	partialDisconnect: Function;
}
export interface State { }
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Entry" })],
});
export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content>
					<List
						style={{ marginTop: 40 }}
						dataArray={routes}
						renderRow={
							data => {
							return (
								<ListItem button
									onPress={() => {
										if(data.route === "Entry"){
											this.props.navigation.dispatch(resetAction);
											this.props.partialDisconnect();
										}
										else this.props.navigation.navigate(data.route);
										}}>
									<Text>{data.caption}</Text>
								</ListItem>
									);}
								}
					/>
				</Content>
			</Container>
		);
	}
}
