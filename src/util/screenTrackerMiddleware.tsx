export default (store) => next => (action) => {
    const result = next(action);
    const nextScreen = getCurrentRouteName(store.getState().navigation);
    
    console.log(store.getState());
    if(nextScreen === "ChatScene"){
        store.dispatch({type: "MESSAGE_SEEN"});
    }
    return result;
}



function getCurrentRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return getCurrentRouteName(route);
    }
    return route.routeName;
  }