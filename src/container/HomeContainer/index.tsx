import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";

export interface Props {
	navigation: any;
	data: Object;
	isLoading: boolean
}
export interface State { }

class HomeContainer extends React.Component<Props, State> {
	render() {
		console.log(this.props.data);
		return <Home navigation={this.props.navigation} list={this.props.data} isLoading={this.props.isLoading} />;
	}
}

const mapStateToProps = state => ({
	data: state.homeReducer.list.filter((item)=> item.id!==state.homeReducer.client_id),
	isLoading: state.homeReducer.isLoading,
});

export default connect(mapStateToProps, null)(HomeContainer);
