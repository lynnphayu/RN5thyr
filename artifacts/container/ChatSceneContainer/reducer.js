const initialState = {
    messages: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case "MESSAGE_SEND":
            const peerId = action.message[0].recipient_id;
            var new_object = {};
            new_object[peerId] = !state.messages[peerId] ? action.message : action.message.concat(state.messages[peerId]);
            return {
                messages: Object.assign({}, state.messages, new_object)
            };
        case "MESSAGE_RECEIVE":
            const peerId_2 = action.message[0].user._id;
            var new_object = {};
            new_object[peerId_2] = !state.messages[peerId_2] ? action.message : action.message.concat(state.messages[peerId_2]);
            return {
                messages: Object.assign({}, state.messages, new_object)
            };
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map