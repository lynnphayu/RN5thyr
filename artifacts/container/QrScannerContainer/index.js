import React from 'react';
import QrScanner from "../../stories/screens/QrScanner";
import * as actionsCreater from "../HomeContainer/actions";
import { connect } from "react-redux";
class QrScannerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.QrScanned = this.QrScanned.bind(this);
    }
    render() {
        return React.createElement(QrScanner, { navigation: this.props.navigation, QrScanned: this.QrScanned });
    }
    QrScanned(id, name) {
        this.props.InitialConnect(id, name);
        this.props.SetClientID(id);
    }
}
const mapStateToProps = function () {
    return {};
};
const mapDispatchToProps = function (dispatch) {
    return {
        InitialConnect: (userID, name) => dispatch(actionsCreater.initialConnect(userID, name)),
        SetClientID: (userID) => dispatch(actionsCreater.setClientID(userID)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(QrScannerContainer);
//# sourceMappingURL=index.js.map