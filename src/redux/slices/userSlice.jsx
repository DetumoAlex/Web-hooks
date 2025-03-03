import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:{
        firstName:''
    }
}
const userSlice = createSlice ({
    name:'user',
    initialState,
    reducers:{updateFirstName(state,action){
        state.user.firstName = action.payload
    }}
})

export const{updateFirstName }=userSlice.actions
export default userSlice.reducer