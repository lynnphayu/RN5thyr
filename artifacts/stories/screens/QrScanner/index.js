import * as React from "react";
import Camera from 'react-native-camera';
class QrScanner extends React.Component {
    render() {
        return (React.createElement(Camera, { ref: "cam", type: Camera.constants.Type.back }));
    }
}
export default QrScanner;
//# sourceMappingURL=index.js.map