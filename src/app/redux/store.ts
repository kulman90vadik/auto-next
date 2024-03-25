import { persistStore, persistReducer,  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



import { useDispatch } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import catalogReducer from '../redux/slices/catalogClise'
import basketReducer from '../redux/slices/basketClise'
// import searchReducer from '../redux/slices/searchClise'
// import loginReducer from '../redux/slices/loginClise'

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['navigation'] 
  // whitelist: ['navigation']
}

const rootReducer = combineReducers({
  basket: basketReducer,
  products: catalogReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

})

export type RootState = ReturnType<typeof store.getState>
// использовать типизацию state...
// import {RootState} from './redux/store'
// const search = useSelector((state: RootState) => state.search.search);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
// диспатч принимает только объекты... в APP проблема.
export const persistor = persistStore(store)
export default store;