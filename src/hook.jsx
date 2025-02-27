import { useSelector, useDispatch } from 'react-redux';
import { addReservation, cancelReservation } from '../store/slices/reservationsSlice';
import { reserveTable, clearTableReservation } from '../store/slices/tablesSlice';

export function useReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector(state => state.reservations.reservations);
  const tables = useSelector(state => state.tables.tables);

  const createReservation = (reservationData) => {
    dispatch(addReservation(reservationData));
    dispatch(reserveTable(reservationData));
  };

  const cancelReservationAndClearTable = (reservationId, tableId) => {
    dispatch(cancelReservation(reservationId));
    dispatch(clearTableReservation(tableId));
  };

  const getTableReservations = (tableId) => {
    return reservations.filter(reservation => reservation.tableId === tableId);
  };

  return {
    reservations,
    tables,
    createReservation,
    cancelReservationAndClearTable,
    getTableReservations
  };
}