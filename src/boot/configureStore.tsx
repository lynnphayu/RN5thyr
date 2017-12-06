import { AsyncStorage } from "react-native";
import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "../reducers";
import socketMiddleware from '../util/socketMiddleware';
import logger from 'redux-logger';
// import screenTracker from "../util/screenTrackerMiddleware";



export default function configureStore(onCompletion: () => void,socket): any {

	
	const enhancer = compose(
		applyMiddleware(socketMiddleware(socket), logger),
		devTools({
			name: "nativestarterkit",
			realtime: true,
		})
	);

	const store = createStore(reducer ,enhancer);
	persistStore(store, { storage: AsyncStorage }, onCompletion);

	return store;
}
