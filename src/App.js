import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import ListadoGastos from './components/ListadoGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // Defincion del state
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [ crearGasto, guardarCrearGasto ] = useState(false);
  const [ gasto, guardarGasto ] = useState({});
  const [ gastos, guardarGastos ] = useState([]);

  useEffect(() => {
    if(crearGasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);

      // Restar el presupuesto
      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);
      
      // cuando se agrega el gasto lo establecemos a false
      guardarCrearGasto(false);
    }

    if(eliminarGasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);

    }

    
  }, [crearGasto]);

  return (
    <div className="App container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          { (preguntaPresupuesto)
            ? 
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
                guardarRestante={guardarRestante}
              />
            : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto}
                    />
                  </div>
                  <div className="one-half column">
                    <ListadoGastos gastos={gastos} />
                    <ControlPresupuesto 
                      presupuesto={presupuesto}
                      restante={restante} 
                    />
                  </div>
                </div>
              )

          }
        </div>
      </header>
        
    </div>
  );
}

export default App;
