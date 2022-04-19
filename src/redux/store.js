import {combineReducers, compose, createStore} from "redux";
import {TrackerReducer} from "./tracker-reducer";

let rootReducer = combineReducers({
    trackerPage: TrackerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers())

window._store = store

export default store
