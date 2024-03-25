// 3 ШАГ

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import { getAllProducts } from '@/app/services/getProducts';
import axios from "axios";
// import getBasket from "@/app/services/getBasket";
// import { getLocalStBasket } from '../../utils/getLocalStBasket';
// type FetchParams = { categoryId: string, page: string, orderId: string }
// ODER
type FetchParams = Record <string, string>;
export const fetchCollection = createAsyncThunk<productType[], Record<string, string>>('products/fetchCollectionStatus', async (params) => {
  const { categoryId, sort } = params;
  const { data } = await axios.get<productType[]>(`http://localhost:3005/products?${categoryId}${sort}`);
    // console.log(`http://localhost:3005/products?${categoryId}${sort}`) 
    return data as productType[];
  }
)


interface CatalogState {
  products: productType[];
  category: number;
  sortId: number;
  // price: number
}

const initialState: CatalogState = {
  products: [],
  category: 0,
  // price: 0,
  sortId: 0,
};


export const catalogSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    // categoryChange: (state, index: PayloadAction<number>) => {
    //   state.category = index.payload;
    // },
    // sortChange: (state, id: PayloadAction<string>) => {
    //   state.sortId = id.payload;
    // },

    btnChange: (state, obj: PayloadAction<productType>) => {
      state.products = state.products.map((product) =>
        Number(product.id) !== Number(obj.payload.id)
          ? product : { ...product, btnAddToCard: !product.btnAddToCard }
      );

    },

    // priceChange: (state, price: PayloadAction<number>) => {
    //   state.price = price.payload;
    // }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCollection.pending, (state) => {
      // state.status = Status.LOADING;
      state.products = [];
    });
    builder.addCase(fetchCollection.fulfilled, (state, action) => {
        state.products = action.payload
      // state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCollection.rejected, (state) => {
      // state.status = Status.ERROR;
      state.products = []
    });
  }
  
});

export const { 
  // categoryChange,
  //  sortChange,
   btnChange,
  //  priceChange 
  } = catalogSlice.actions;

export default catalogSlice.reducer;

