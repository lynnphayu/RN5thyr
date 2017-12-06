import * as React from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right,
	List,
	ListItem,
	Thumbnail,
	Badge

} from "native-base";
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';

export interface Props {
	isLoading: boolean;
	navigation: any;
	list: any;
}
export interface State { }
class Home extends React.Component<Props, State> {
	render() {
		return (
			<Container >
				<Header>
					<Left>
						<Button transparent>
							<Icon
								active
								name="menu"
								onPress={() => this.props.navigation.navigate("DrawerOpen")} />
						</Button>
					</Left>
					<Body>
						<Title>Actives</Title>
					</Body>
					<Right />
				</Header>
				<Content style={{ flex: 1 }}>
					{this.renderHomeContent()}
				</Content>
			</Container>
		);
	}

	renderHomeContent() {
		if (this.props.isLoading)
			return <Spinner type="Wave" />
				;
		return <List style={styles.list}>
			{this.props.list.map((item, i) => (
				<ListItem
					avatar
					key={i}
					onPress={() =>
						this.props.navigation.navigate("ChatScene", {
							name: item.name,
							id: item.id
						})}>
					<Left>
						<Thumbnail source={{ uri: "https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" }} />
					</Left>
					<Body>
						<Text>{item.name}</Text>
						<Text note>Doing what you like will always keep you happy . .</Text>
					</Body>
					<Right>
						<Text note>3:43 pm</Text>
						<Badge success style={{marginTop: 5}}>
							<Text>{item.new_msg}</Text>
						</Badge>
					</Right>
				</ListItem>))}
		</List>;
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
