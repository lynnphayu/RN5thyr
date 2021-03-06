const initialState = {
    list: [],
    isLoading: true,
    client_id: '',
    client_socket_is: ''
};
export default function (state = initialState, action) {
    switch (action.type) {
        case "CONNCETED_OK_ATTACHED_WITH_CLIENT_LIST":
            return Object.assign({}, state, { isLoading: false, list: action.data });
        case "SET_CLIENT_ID":
            return Object.assign({}, state, { client_id: action.id });
        case "A_CLIENT_CONNECT":
            return Object.assign({}, state, { list: action.data });
        case "MESSAGE_RECEIVE":
            state.list.forEach(element => { if (element.id === action.message[0].user._id)
                element.new_msg++; });
            return Object.assign({}, state, { list: Object.assign([], state.list) });
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map