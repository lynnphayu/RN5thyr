export function listIsLoading(bool) {
    return {
        type: "LIST_IS_LOADING",
        isLoading: bool,
    };
}
export function injectData(list) {
    return {
        type: "FETCH_LIST_SUCCESS",
        list,
    };
}
export function listsFetched(data) {
    return dispatch => {
        dispatch(injectData(data));
        dispatch(listIsLoading(false));
    };
}
export function initialConnect(id, name) {
    return {
        type: "INITIAL_CONNECT",
        overSocket: true,
        id: id,
        name: name
    };
}
export function setClientID(id) {
    return {
        type: "SET_CLIENT_ID",
        id: id
    };
}
export function partialDisconnect(id) {
    return {
        type: "PARTIAL_DISCONNECT",
        overSocket: true,
        id: id,
    };
}
//# sourceMappingURL=actions.js.map