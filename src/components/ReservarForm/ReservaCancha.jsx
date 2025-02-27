import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTableById } from '../../store/slices/Tableselector';
import { reserveTable } from '../../store/slices/Slices/menuSlice';
import styles from './OrderForm.module.css';

const ReservaCancha = ({ tableId }) => {
  const dispatch = useDispatch();
  const table = useSelector(state => selectTableById(state, tableId));
  
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    customerName: '',
    guests: 1,
    date: '',
    time: ''
  });

  // Manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    if (!tableId) return;

    // Disparar la acción para reservar la mesa
    dispatch(reserveTable({
      tableId,
      ...formData
    }));

    // Reiniciar el formulario después de la reserva
    setFormData({
      customerName: '',
      guests: 1,
      date: '',
      time: ''
    });
  };

  // Si no hay una mesa seleccionada, mostrar un mensaje
  if (!tableId) {
    return (
      <div className={styles.noTable}>
        <p>Por favor, seleccione una cancha primero</p>
      </div>
    );
  }
//captura de datos del formulario
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Reservar Cancha {table?.number}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
   
        <div className={styles.formGroup}>
          <label>Nombre:</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

  
        <div className={styles.formGroup}>
          <label>Número de personas:</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max={table?.capacity || 1}
            required
            className={styles.input}
          />
        </div>

   
        <div className={styles.formGroup}>
          <label>Fecha:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
            className={styles.input}
          />
        </div>

     
        <div className={styles.formGroup}>
          <label>Hora:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

    
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={!formData.customerName || !formData.date || !formData.time}
        >
          Confirmar Reserva
        </button>
      </form>
    </div>
  );
};

export default ReservaCancha;