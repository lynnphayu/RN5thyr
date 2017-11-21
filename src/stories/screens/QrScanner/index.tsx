import React, { Component } from 'react';
import BarcodeScanner from 'react-native-barcodescanner';
import { Container,Content } from 'native-base';


class QrScanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            torchMode: 'off',
            cameraType: 'back',
        };
    }

    barcodeReceived(e) {
        console.log('Barcode: ' + e.data);
        console.log('Type: ' + e.type);
    }

    render() {
        return (
            <Container>
                <Content>
                    <BarcodeScanner
                        onBarCodeRead={this.barcodeReceived}
                        style={{ flex: 1 }}
                        torchMode='off'
                        cameraType='back'
                    />
                </Content>
            </Container>
        );
    }
};

export default QrScanner;
