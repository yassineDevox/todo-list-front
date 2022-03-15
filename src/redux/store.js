import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  authReducer,
  checkpointReducer,
  instructorReducer,
  studentReducer,
  trackReducer,
} from "ducks";

const storeRedux = configureStore({
  reducer: combineReducers({
    track: trackReducer,
    student: studentReducer,
    instructor: instructorReducer,
    auth: authReducer,
    checkpoint: checkpointReducer,
  }),
});

export default storeRedux;
