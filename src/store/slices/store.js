import { configureStore } from '@reduxjs/toolkit';
import tablesReducer from './Slices/tablesSlice.js'; 
import reservationsReducer from './Slices/reservationsSlice.js'; 


export const store = configureStore({
  reducer: {
    tables: tablesReducer, // Estado para las mesas
    reservations: reservationsReducer // Estado para las reservas
  }
});
