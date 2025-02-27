import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTablesByZone } from '../SelectorZona/Selector';
import styles from './Plano.module.css';

const PlanoDeportivo = ({ zone, onTableSelect }) => {
  const tables = useSelector(state => selectTablesByZone(state, zone));
//validacion de si la cancha esta reserva, seleccionada o disponible
  const getTableColor = (table) => {
    if (table.reserved) return styles.tableReserved;
    if (table.selected) return styles.tableSelected;
    return styles.tableAvailable;
  };

  return (
    <div className={styles.planoContainer}>
      <div className={styles.zoneTitle}>
        {zone.charAt(0).toUpperCase() + zone.slice(1)}
      </div>
      
      <div className={styles.plano}>
        <div className={styles.tablesGrid}>
          {tables.map(table => (
            <div
              key={table.id}
              className={`${styles.table} ${getTableColor(table)}`}
              onClick={() => !table.reserved && onTableSelect(table.id)}
            >
              <div className={styles.tableContent}>
                <span className={styles.tableNumber}>{table.number}</span>
                <span className={styles.capacity}>{table.capacity} pers.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanoDeportivo;