import { createStore } from "redux"
import TrackReducer from "./reducers/track"

const store = createStore(
    TrackReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
            window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store 