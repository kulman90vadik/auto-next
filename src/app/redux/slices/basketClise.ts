import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { getCartLSTotal, getLocalStBasket, getLocalStBasketLenght } from "../../utils/getLocalStBasket";

interface BasketState {
  basket: productType[];
  count: number;
  // totalPrice: number
}

const initialState: BasketState = {
  basket: [],
  // count: getLocalStBasketLenght(),
  count: 0,
  // totalPrice: getCartLSTotal()
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    addToBasket: (state, card: PayloadAction<productType>) => {
      if (state.basket.find((item) => item.id === card.payload.id)) {
        state.basket = state.basket.filter((elem) => {
          return elem.id !== card.payload.id;
        });
        state.count = state.count - 1;
      } else {
        state.count = state.count + 1;
        // state.basket = [...state.basket, { ...card.payload, btn: true }]; //????
        state.basket = [...state.basket, card.payload]; //????

        // state.totalPrice = state.basket.reduce((acc, currentValue) =>{
        //   return acc + currentValue.price - (currentValue.price * currentValue.sale) / 100
        // }, 0)
      }
    },
    deleteCard: (state, card:PayloadAction<productType>) => {
      state.basket = state.basket.filter((elem) => elem.id !== card.payload.id);
      state.count = state.count - 1;
    },

    // plusTotalPrice: (state, obj:PayloadAction<cardItem>) => {
    //   state.totalPrice = state.totalPrice + (obj.payload.price - (obj.payload.price * obj.payload.sale) / 100)
    // },

    // minusTotalPrice: (state, obj:PayloadAction<cardItem>) => {
    //   state.totalPrice = state.totalPrice - (obj.payload.price - (obj.payload.price * obj.payload.sale) / 100)
    // },

    // delPrice: (state, num:PayloadAction<number>) => {
    //   state.totalPrice = state.totalPrice - num.payload
    // }
  },
});

export const { addToBasket, deleteCard, 
  // plusTotalPrice,
  // minusTotalPrice,
  // delPrice,
} = basketSlice.actions;

export default basketSlice.reducer;
