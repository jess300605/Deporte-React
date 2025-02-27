import React from 'react';
import { ZONES, ZONE_LABELS, ZONE_DESCRIPTIONS } from '../Canchas/Canchas';
import styles from './Selector.module.css';

// Componente para seleccionar una zona
const SelectorZona = ({ selectedZone, onZoneChange }) => {
  return (
    <div className={styles.selectorContainer}>
      <h3 className={styles.title}>Seleccione una zona</h3>
      
      {/* Grid de opciones de zonas */}
      <div className={styles.zonesGrid}>
        {Object.values(ZONES).map((zone) => (
          <div
            key={zone}
            className={`${styles.zoneCard} ${selectedZone === zone ? styles.selected : ''}`}
            onClick={() => onZoneChange(zone)}
          >
            <div className={styles.zoneHeader}>
              <h4 className={styles.zoneName}>{ZONE_LABELS[zone]}</h4>
              
              {/* Icono representativo de la zona */}
              <div className={`${styles.zoneIcon} ${styles[zone]}`}>
                {zone === ZONES.INTERIOR && (
                  <i className="fas fa-door-open"></i>
                )}
                {zone === ZONES.TERRAZA && (
                  <i className="fas fa-umbrella-beach"></i>
                )}
                {zone === ZONES.VIP && (
                  <i className="fas fa-star"></i>
                )}
              </div>
            </div>
            
            {/* Descripción de la zona */}
            <p className={styles.zoneDescription}>
              {ZONE_DESCRIPTIONS[zone]}
            </p>

            {/* Botón para seleccionar la zona */}
            <div className={styles.zoneFooter}>
              <button 
                className={`${styles.selectButton} ${selectedZone === zone ? styles.selected : ''}`}
                onClick={() => onZoneChange(zone)}
              >
                {selectedZone === zone ? 'Seleccionada' : 'Seleccionar'}
              </button>
            </div>
          </div>
        ))}
      </div>

   
      {selectedZone && (
        <div className={styles.selectedZoneInfo}>
          <p>Zona seleccionada: <strong>{ZONE_LABELS[selectedZone]}</strong></p>
        </div>
      )}
    </div>
  );
};

export default SelectorZona;