import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../tools/axios";

const loadcheckpoints = 
createAsyncThunk("checkpoint/all",async()=>{
    return client.get("/checkpoints")
})

export const checkpointReducer = null