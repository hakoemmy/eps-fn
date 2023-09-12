import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import initialState from "./initialStates";
import rootSaga from "./sagas";
import "regenerator-runtime/runtime";
import { logger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

process.env.NODE_ENV === "development" && middlewares.push(logger);

const store = createStore(
  combineReducers(reducers),
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
sagaMiddleware.run(rootSaga);

export default store;
