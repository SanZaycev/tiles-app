import {combineReducers, createStore} from "redux";
import tilesReducer from "./tiles-reducer";

const reducers = combineReducers({
    tilesPage: tilesReducer,
});

const store = createStore(reducers);
window.state = store.getState();
export default store;
