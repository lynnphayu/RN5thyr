import * as React from 'react';
// import Camera from 'react-native-camera';
import BarCodeScanner from 'react-native-barcodescanner';
// import {Vibration} from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Body, Text } from 'native-base';
import { PickRandomWord } from '../../../util/randomNameGenerator';
import uuid from 'uuid';
class QrScanner extends React.Component {
    render() {
        return (React.createElement(Container, { style: { flex: 1 } },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, "Scan")),
                React.createElement(Right, null)),
            React.createElement(BarCodeScanner, { style: { flex: 1 }, onBarCodeRead: this._onBarCodeRead.bind(this), cameraType: "back" },
                React.createElement(Button, { onPress: this._onButtonPressed.bind(this) },
                    React.createElement(Text, null, "Submit it")))));
    }
    _onButtonPressed() {
        this.props.navigation.navigate("Home");
        this.props.QrScanned(uuid.v4(), PickRandomWord());
    }
    _onBarCodeRead(e) {
        // Vibration.vibrate(300,true);
        this.props.navigation.navigate("Home");
        this.props.QrScanned(e.data);
    }
}
;
export default QrScanner;
//# sourceMappingURL=index.js.map