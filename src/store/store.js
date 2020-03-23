import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducer/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = store => next => action => {
    console.log("Before action-->", store.getState());
    next(action);
    console.log("After action-->", store.getState());
};
const enhancer = composeEnhancers(applyMiddleware(logger, thunk));
const store = createStore(rootReducer, enhancer);

export default store;
