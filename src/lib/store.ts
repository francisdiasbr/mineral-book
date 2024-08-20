import { configureStore } from '@reduxjs/toolkit'
import searchMineralsSlice from './features/searchMineralsSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      searchMinerals: searchMineralsSlice,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']