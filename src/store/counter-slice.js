import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter:0, showCounter:false};

//redux toolkit code
const counterSlice = createSlice({//its a replacement for 
    name:"counter",
    initialState:initialCounterState,
    reducers:{
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer