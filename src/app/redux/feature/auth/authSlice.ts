import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { string } from "zod";

const initialState ={
    token:null as string | null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setAccessToken(state, action:PayloadAction<string>){
            state.token= action.payload
        }
    }
})

export const {setAccessToken}  = authSlice.actions;
export default authSlice.reducer;