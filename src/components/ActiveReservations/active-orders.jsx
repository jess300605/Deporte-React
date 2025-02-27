import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ActiveOrders.module.css';

//Funcion para reservas activas
function ActiveReservations() {
  const tables = useSelector(state => 
    state.tables.tables.filter(table => table.reserved)
  );

  if (tables.length === 0) {
    return (
      <div className={styles.noOrders}>
        <p>No hay reservas activas</p>
      </div>
    );
  }
//datos de la reserva
  return (
    <div className={styles.container}>
      {tables.map(table => (
        <div key={table.id} className={styles.orderCard}>
          <div className={styles.orderHeader}>
            <h3>Mesa {table.number}</h3>
            <span className={styles.status}>
              {table.zone}
            </span>
          </div>

          <div className={styles.orderItems}>
            <div className={styles.item}>
              <span>Cliente:</span>
              <span>{table.customerName}</span>
            </div>
            <div className={styles.item}>
              <span>Personas:</span>
              <span>{table.guests}</span>
            </div>
            <div className={styles.item}>
              <span>Fecha:</span>
              <span>{table.date}</span>
            </div>
            <div className={styles.item}>
              <span>Hora:</span>
              <span>{table.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActiveReservations;