import * as React from "react";
import ChatScene from "../../stories/screens/ChatScene";
import { connect } from "react-redux";
import * as actionsCreater from "./actions";
class ChatSceneContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSend = this.onSend.bind(this);
    }
    componentWillMount() {
    }
    onSend(message, recipient_id) {
        this.props.msgListChange(message);
        this.props.msgSendOverSocket(message, recipient_id);
    }
    render() {
        console.log(this.props.messages[this.props.navigation.state.params.id]);
        return React.createElement(ChatScene, { navigation: this.props.navigation, messages: this.props.messages[this.props.navigation.state.params.id], onSend: this.onSend, id: this.props.id });
    }
}
const mapStateToProps = state => ({
    messages: state.chatReducer.messages,
    id: state.homeReducer.client_id
});
const mapDispatchToProps = function (dispatch) {
    return {
        msgListChange: (msg) => dispatch(actionsCreater.messageListChange(msg)),
        msgSendOverSocket: (msg, recipient_id) => dispatch(actionsCreater.messageSend(msg, recipient_id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatSceneContainer);
//# sourceMappingURL=index.js.map