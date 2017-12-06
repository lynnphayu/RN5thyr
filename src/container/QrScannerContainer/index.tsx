import React from 'react';
import QrScanner from "../../stories/screens/QrScanner";
import * as actionsCreater from "../HomeContainer/actions";
import { connect } from "react-redux";

export interface Props {
    navigation: any;
    InitialConnect: Function;
    SetClientID: Function
}
export interface State { }

class QrScannerContainer extends React.Component<Props, State>{
    constructor(props){
        super(props);
        this.QrScanned = this.QrScanned.bind(this);
    }

    render() {
        return <QrScanner navigation={this.props.navigation} QrScanned={this.QrScanned} />;
    }

    QrScanned(id,name) {
        this.props.InitialConnect(id,name);
        this.props.SetClientID(id);
    }
}

const mapStateToProps = function(){
    return {};
}

const mapDispatchToProps = function (dispatch) {
    return {
        InitialConnect: (userID,name) => dispatch(actionsCreater.initialConnect(userID,name)),
        SetClientID: (userID) => dispatch(actionsCreater.setClientID(userID)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(QrScannerContainer);