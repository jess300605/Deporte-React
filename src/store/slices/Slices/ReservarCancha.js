import { createSlice } from '@reduxjs/toolkit';

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    nextReservationId: 1
  },
  reducers: {
    addReservation: (state, action) => {
      state.reservations.push({
        id: state.nextReservationId,
        tableId: action.payload.tableId,
        customerName: action.payload.customerName,
        guests: action.payload.guests,
        date: action.payload.date,
        time: action.payload.time,
        status: 'confirmed'
      });
      state.nextReservationId += 1;
    },
    cancelReservation: (state, action) => {
      state.reservations = state.reservations.filter(
        reservation => reservation.id !== action.payload
      );
    },
    updateReservation: (state, action) => {
      const reservation = state.reservations.find(
        r => r.id === action.payload.reservationId
      );
      if (reservation) {
        Object.assign(reservation, action.payload.updates);
      }
    }
  }
});

export const { addReservation, cancelReservation, updateReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;