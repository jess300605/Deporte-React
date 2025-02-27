import React from 'react';
import { useSelector } from 'react-redux';
import { selectTableById } from '../../store/slices/Tableselector';
import styles from './ResumenReserva.module.css';
//resumen de la reserva
const ResumenReserva = ({ tableId }) => {
  const table = useSelector(state => selectTableById(state, tableId));

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!tableId || !table?.reserved) {
    return (
      <div className={styles.noReservation}>
        <h3>Resumen de Reserva</h3>
        <p>No hay una reserva seleccionada</p>
      </div>
    );
  }
//datos de la reserva
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Resumen de Reserva</h3>
      
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.tableNumber}>Cancha {table.number}</span>
          <span className={`${styles.badge} ${styles.zoneType}`}>
            {table.zone.charAt(0).toUpperCase() + table.zone.slice(1)}
          </span>
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Equipo:</span>
            <span className={styles.value}>{table.customerName}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Jugadores:</span>
            <span className={styles.value}>{table.guests}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Fecha:</span>
            <span className={styles.value}>{formatDate(table.date)}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Hora:</span>
            <span className={styles.value}>{table.time}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Capacidad maxima:</span>
            <span className={styles.value}>{table.capacity} personas</span>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.status}>
            <span className={styles.statusDot}></span>
            Reserva confirmada
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumenReserva;