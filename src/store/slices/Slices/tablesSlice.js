import { createSlice } from '@reduxjs/toolkit';

const tablesSlice = createSlice({
  name: 'tables',
  initialState: {
    tables: [
      { id: 1, number: 'Cancha-n1', status: 'available' },
      { id: 2, number: 'Cancha-n2', status: 'available' },
      { id: 3, number: 'Cancha-n3', status: 'available' },
      { id: 4, number: 'Cancha-n4', status: 'available' },
    ]
  },
  reducers: {
    updateTableStatus: (state, action) => {
      const { tableId, status } = action.payload;
      const table = state.tables.find(t => t.id === tableId);
      if (table) {
        table.status = status;
      }
    }
  }
});

