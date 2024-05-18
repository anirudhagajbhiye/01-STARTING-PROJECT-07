//import { createStore } from "redux";///equal to require("redux")
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

const store = configureStore({
    reducer: {county:counterReducer,auth: authReducer },//reducer: counterSlice.reducer,auth:authSlice.reducer} it can be return as if there are multiple reducer
});

export default store;

//export const INCREMENT = "increment";//to avoid spelling mistake
//export const DECREMENT = "decrement";

// const counterReducer = (state = { counter: 1, showCounter:false }, action) => {

//     if(action.type === "increment"){
//         return{
//             ...state,
//             counter:state.counter + 1,
//            // showCounter:state.showCounter,//either of counter must be at rest
//         };
//     }

//     if(action.type === "decrement"){
//         return{
//             ...state,
//             counter:state.counter - 1,
//             //showCounter:state.showCounter,
//         };
//     }

//     if(action.type === "incrementBy5"){
//         return{
//             ...state,//it act as a single spread operator instead of multiple state counter
//             counter:state.counter + 5,
//             //showCounter:state.showCounter,
//         };
//     }

//     if(action.type === "toggle"){
//         return{
//             ...state,
//             showCounter: !state.showCounter,
//             //counter:state.counter,
//         };
//     }
//     return state;

// };===counterSlice
