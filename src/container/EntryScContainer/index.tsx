import * as React from "react";
import EntrySc from "../../stories/screens/EntrySc";

export interface Props {
	navigation: any;
}
export interface State {}
class EntryScContainer extends React.Component<Props, State> {

	tapQrScan() {
		this.props.navigation.navigate("QrScanner");
	}

	render() {
		return <EntrySc onTapQrScan={() => this.tapQrScan()} />;
	}
}
export default EntryScContainer;
