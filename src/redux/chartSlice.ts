import { createSlice } from '@reduxjs/toolkit';


const initialState: {product: Product, quantity: number}[] = []

export const CartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.find((item) => item.product.id === action.payload.product.id);
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.push({ ...action.payload, quantity: 1 });
            }
          },
          incrementQuantity: (state, action) => {
            const item = state.find((item) => item.product.id === action.payload.id);
            if(item) item.quantity++;
          },
          decrementQuantity: (state, action) => {
            const item = state.find((item) => item.product.id === action.payload.id);
            if (item && item.quantity === 1) {
                state.map((i, index) =>{
                    if(i.product.id == item.product.id) state = state.splice(index,1)
                })
                
                
            } else if(item) {
              item.quantity--;
            }
          },
          removeItem: (state, action) => {
            const removeItem = state.filter((item) => item.product.id !== action.payload.id);
            state = removeItem;
          },
        }
  });
 
  export const cartReducer = CartSlice.reducer;
  export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
  } = CartSlice.actions;
