import * as React from "react";
import { Platform,Image } from "react-native";
import { Container, Content, Header, Body, Button, Text, View, Icon, Footer } from "native-base";
// import styles from "./styles";
export interface Props {
	onTapQrScan: Function;
}
export interface State {}
class EntrySc extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="flash" style={{ fontSize: 104 }} />
						{/* <Title>Soc-P2P</Title> */} 
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
					</Body>
				</Header>
				<Content>
					<View padder>
						<Button block onPress={() => this.props.onTapQrScan()}>
							<Text>Scan QR Code</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Made with love at </Text>
						</View>
						<Image
							source={{ uri: "https://geekyants.com/images/logo-dark.png" }}
							style={{ width: 422 / 4, height: 86 / 4 }}
						/>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default EntrySc;
