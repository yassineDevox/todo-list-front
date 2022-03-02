import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:{}
    },
    reducers:{
        loadUser(state,{payload}){
            state.user = payload.userInfos    
        }
    }

})

//exporter toutes les actions pour les composants 
export const {loadUser}  = authSlice.actions
//exporter le reduceur pour le store 
export default authSlice.reducer

