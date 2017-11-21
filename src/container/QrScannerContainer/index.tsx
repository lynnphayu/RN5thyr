import React from 'react';
import QrScanner from "../../stories/screens/QrScanner";

export interface Props {
    navigation: any
}
export interface State { }

class QrScannerContainer extends React.Component<Props, State>{

    render() {
        return <QrScanner navigation={this.props.navigation}/>;
    }
}

export default QrScannerContainer;