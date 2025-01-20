import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: string,
    urls: [],
    title: string,
    price: number,
    star: number,
    
}
interface ProductsState {
    detail: Product[];
}

const initialState: ProductsState = {
    detail: [],
};

const productsSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Product[]>) {
            state.detail = action.payload;
        },
    },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;