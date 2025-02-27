export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  export const isTimeSlotAvailable = (date, time, tableId, reservations) => {
    return !reservations.some(
      reservation =>
        reservation.tableId === tableId &&
        reservation.date === date &&
        reservation.time === time
    );
  };
  
  export const getAvailableTables = (tables, date, time, reservations) => {
    return tables.filter(table => 
      !reservations.some(
        reservation =>
          reservation.tableId === table.id &&
          reservation.date === date &&
          reservation.time === time
      )
    );
  };