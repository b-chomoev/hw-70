import { configureStore } from '@reduxjs/toolkit';
import { ContactReducer } from '../store/slices/contactSlice';

export const store = configureStore({
    reducer: {
      contact: ContactReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;