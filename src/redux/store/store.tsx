import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga"; // Saga Root File
import rootReducer from "../reducer"; //Reducer Root File

const sagaMiddleware = createSagaMiddleware(); //Using React Saga As Middleware

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); //Main Store object
sagaMiddleware.run(rootSaga); // Initializing Saga

export default store;
