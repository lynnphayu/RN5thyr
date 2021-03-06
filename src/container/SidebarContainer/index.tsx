import * as React from "react";
import { connect } from "react-redux";
import Sidebar from "../../stories/screens/Sidebar";
import * as actionsCreater from "../HomeContainer/actions";

export interface Props {
	navigation: any;
	partialDisconnect: Function;
	id : String
}
export interface State {}
class SidebarContainer extends React.Component<Props, State> {
	render() {
		return <Sidebar navigation={this.props.navigation} partialDisconnect={this._partialDisconnect.bind(this)}/>;
	}

	_partialDisconnect(){
		this.props.partialDisconnect(this.props.id);
	}
}

const mapStateToProps = function (state){
	return {
		id : state.homeReducer.client_id
	}
}
const mapDispatchToProps = function (dispatch) {
    return {
        partialDisconnect: (userID) => dispatch(actionsCreater.partialDisconnect(userID)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);