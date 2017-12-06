import * as React from 'react';
// import Camera from 'react-native-camera';
import BarCodeScanner from 'react-native-barcodescanner';
// import {Vibration} from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Body, Text } from 'native-base';
import { PickRandomWord } from '../../../util/randomNameGenerator';
import uuid from 'uuid';

export interface Props {
    navigation: any;
    QrScanned: Function;

}
export interface State { }
class QrScanner extends React.Component<Props, State> {

    render() {
        return (
            <Container style={{ flex: 1}}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                    </Left>

                    <Body style={{ flex: 3 }}>
                        <Title>Scan</Title>
                    </Body>

                    <Right />
                </Header>
                <BarCodeScanner
                    style={{ flex: 1 }}
                    onBarCodeRead={this._onBarCodeRead.bind(this)}
                    cameraType="back">
                    <Button onPress={this._onButtonPressed.bind(this)}>
                        <Text>Submit it</Text>
                    </Button>
                </BarCodeScanner>
            </Container>
        );
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
};
export default QrScanner;
