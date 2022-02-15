import {
    configureStore,
    combineReducers
} from "@reduxjs/toolkit";
import trackReducer from "./ducks/track"
import studentReducer from "./ducks/student"
import instructorReducer from "./ducks/instructor"


const storeRedux = configureStore({
    reducer: combineReducers({
        track: trackReducer,
        student: studentReducer,
        instructor: instructorReducer
    })
})

export default storeRedux 