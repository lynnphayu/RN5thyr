import * as React from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";
import { GiftedChat } from 'react-native-gifted-chat';
import styles from "./styles";
class ChatScene extends React.Component {
    constructor(props) {
        super(props);
        this.onSend = this.onSend.bind(this);
    }
    onSend(messages = []) {
        messages.forEach((ele) => ele.recipient_id = this.props.navigation.state.params.id);
        this.props.onSend(messages, this.props.navigation.state.params.id);
        console.log(this.props.messages);
    }
    render() {
        const param = this.props.navigation.state.params;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, param.name)),
                React.createElement(Right, null)),
            React.createElement(GiftedChat, { messages: this.props.messages, onSend: (messages) => this.onSend(messages), user: {
                    _id: this.props.id,
                } })));
    }
}
export default ChatScene;
// // import * as React from 'react';
// // import { GiftedChat } from 'react-native-gifted-chat';
// // export interface Props {
// // 	navigation: any;
// // }
// // export default class ChatScene extends React.Component {
// //   state = {
// //     messages: [],
// //   };
// //   componentWillMount() {
// //     this.setState({
// //       messages: [
// //         {
// //           _id: 1,
// //           text: 'Hello developer',
// //           createdAt: new Date(),
// //           user: {
// //             _id: 2,
// //             name: 'React Native',
// //             avatar: 'https://facebook.github.io/react/img/logo_og.png',
// //           },
// //         },
// //       ],
// //     });
// //   }
// //   onSend(messages = []) {
// //     this.setState((previousState) => ({
// //       messages: GiftedChat.append(previousState.messages, messages),
// //     }));
// //   }
// //   render() {
// //     return (
// //       <GiftedChat
// //         messages={this.state.messages}
// //         onSend={(messages) => this.onSend(messages)}
// //         user={{
// //           _id: 1,
// //         }}
// //       />
// //     );
// //   }
// // }
//# sourceMappingURL=index.js.map