import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
function App() {

  // Defincion del state
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);

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
              />
            : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario />
                  </div>
                  <div className="one-half column"></div>
                </div>
              )

          }
        </div>
      </header>
        
    </div>
  );
}

export default App;
