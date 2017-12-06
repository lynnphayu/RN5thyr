export default (socket, channelName = "publicChannel") => store => {
    // backend to client action dispatching
    socket.on(channelName, store.dispatch);
    // client to backend action
    return next => action => {
        if (action.overSocket) {
            socket.emit(channelName, action);
        }
        return next(action);
    };
};
//# sourceMappingURL=socketMiddleware.js.map