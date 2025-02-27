
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/slices/store'; 

import PlanoDeportivo from './components/Plano/PlanoDeportivo';
import ReservaCancha from './components/ReservarForm/ReservaCancha';
import SelectorZona from '../src/SelectorZona/SelectorZona';
import Resumen from './components/Resumen/Resumen';
import PlanoDeportivo from './components/Plano/PlanoDeportivo';
import ReservaCancha from './components/ReservarForm/ReservaCancha';

export default function Home() {
  // Estado para la zona seleccionada (por defecto "interior")
  const [selectedZone, setSelectedZone] = useState('interior');

  // Estado para la mesa seleccionada (inicialmente null)
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    // Proveedor de Redux para el estado global
    <Provider store={store}>
     
        <div className="container py-5">
          <h1 className="text-center mb-4">Sistema de Reservas - Restaurante</h1>
          
          <div className="row">
            {/* Sección de selección de zona y plano del restaurante */}
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <SelectorZona 
                    selectedZone={selectedZone} 
                    onZoneChange={setSelectedZone} 
                  />
                  <PlanoDeportivo 
                    zone={selectedZone}
                    onTableSelect={setSelectedTable}
                  />
                </div>
              </div>
            </div>

            {/* Sección de formulario de reserva y resumen */}
            <div className="col-md-4">
          
                <ReservaCancha tableId={selectedTable} />
                <div className="mt-4">
                  <Resumen tableId={selectedTable} />
                </div>
              
            </div>
          </div>
        </div>
   
    </Provider>
  );
}
