import { createSlice } from "@reduxjs/toolkit";

const productData= createSlice({
    name:'products',
    initialState: {
        productItems:[],
    },
    reducers:{
        addProductItems:(state, action)=>{
            state.productItems.push(action.payload);
        },
    }
})

export const{addProductItems}= productData.actions;
export default  productData.reducer;