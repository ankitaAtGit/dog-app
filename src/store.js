import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from './reducers';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });
sagaMiddleware.run(saga);

export default store;