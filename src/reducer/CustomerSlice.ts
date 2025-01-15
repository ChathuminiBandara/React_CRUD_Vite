import {Customer} from "../models/Customer.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    customers:[],
}
const CustomerSlice = createSlice({
    name: "Customer",
    initialState : initialState,
    reducers:{
        addCustomer (state, action){
            state.customers.push(action.payload)
        },
        deleteCustomer (state,action){
            const index = state.customers.findIndex((customer:Customer) => customer.email === action.payload.email);
            if (index !== -1) {
                state.customers.splice(index, 1);
            }
        },
        updateCustomer (state, action){
            const index = state.customers.findIndex((customer:Customer) => customer.email === action.payload.email);
            if (index !== -1) {
                state.customers[index] = action.payload;
            }
        }
    }
})
export const {addCustomer, deleteCustomer,updateCustomer} = CustomerSlice.actions;
export default CustomerSlice.reducer;