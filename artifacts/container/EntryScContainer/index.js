import * as React from "react";
import EntrySc from "../../stories/screens/EntrySc";
class EntryScContainer extends React.Component {
    tapQrScan() {
        this.props.navigation.navigate("QrScanner");
    }
    render() {
        return React.createElement(EntrySc, { onTapQrScan: () => this.tapQrScan() });
    }
}
export default EntryScContainer;
//# sourceMappingURL=index.js.map