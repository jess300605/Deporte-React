
import { createSelector } from '@reduxjs/toolkit';
export const selectAllTables = state => state.tables.tables;
export const selectTablesByZone = createSelector(
  [selectAllTables, (_, zone) => zone], // Recibe todas las mesas y la zona como argumentos
  (tables, zone) => tables.filter(table => table.zone === zone) // Retorna solo las mesas de la zona dada
);

export const selectTableById = createSelector(
  [selectAllTables, (_, tableId) => tableId], // Recibe todas las mesas y el ID de la mesa
  (tables, tableId) => tables.find(table => table.id === tableId) // Retorna la mesa que coincide con el ID
);
