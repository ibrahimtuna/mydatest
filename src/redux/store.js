import {persistReducer,persistStore} from "redux-persist";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import {fetchAccessToken} from "./sagas";

const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whitelist: ['user'],
    blacklist:['']
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(fetchAccessToken)


let persistor = persistStore(store);

export {store,persistor};
