import { createSlice } from '@reduxjs/toolkit';
import { ZONES, ZONE_CAPACITIES, RESERVATION_STATUS, TIME_SLOTS } from './zonesData'; // Asegúrate de importar los datos predefinidos

// Estado inicial con las canchas disponibles
const initialState = {
  fields: [
    { id: 1, zone: ZONES.CANCHA_5, capacity: ZONE_CAPACITIES[ZONES.CANCHA_5], reserved: false },
    { id: 2, zone: ZONES.CANCHA_7, capacity: ZONE_CAPACITIES[ZONES.CANCHA_7], reserved: false },
    { id: 3, zone: ZONES.CANCHA_11, capacity: ZONE_CAPACITIES[ZONES.CANCHA_11], reserved: false }
  ]
};

const fieldsSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    selectField: (state, action) => {
      state.fields = state.fields.map(field => ({
        ...field,
        selected: field.id === action.payload
      }));
    },
    reserveField: (state, action) => {
      const field = state.fields.find(f => f.id === action.payload.fieldId);
      if (field) {
        field.reserved = true;
        field.selected = false;
        field.customerName = action.payload.customerName;
        field.players = action.payload.players;
        field.date = action.payload.date;
        field.time = action.payload.time;
        field.status = RESERVATION_STATUS.CONFIRMED;
      }
    },
    cancelReservation: (state, action) => {
      const field = state.fields.find(f => f.id === action.payload.fieldId);
      if (field) {
        field.reserved = false;
        field.customerName = null;
        field.players = null;
        field.date = null;
        field.time = null;
        field.status = RESERVATION_STATUS.CANCELLED;
      }
    }
  }
});

export const { selectField, reserveField, cancelReservation } = fieldsSlice.actions;
export default fieldsSlice.reducer;
