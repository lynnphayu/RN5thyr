import { combineReducers } from "redux";
// import socketActionReducer from "../socketUtil/socketActionReducer";
import homeReducer from "../container/HomeContainer/reducer";
import chatReducer from "../container/ChatSceneContainer/reducer";
export default combineReducers({
    homeReducer,
    chatReducer
});
//# sourceMappingURL=index.js.map