import { configureStore } from '@reduxjs/toolkit';
import mineralsSearchReducer from '../features/mineralsSearchSlice';

export const store = configureStore({
  reducer: {
    mineralsSearch: mineralsSearchReducer
  },
});

// Tipagem para o dispatch que entende thunks
type AppDispatch = typeof store.dispatch;
export default store;

// Exporte o tipo do estado e do dispatch para uso com useSelector e useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = AppDispatch;