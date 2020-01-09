import React, { useState } from 'react';
import Error from './Error';


// Formulario para agregar los gatos
function Formulario(props) {
    
    // Definicion de state
    const [ nombreGasto, guardarNombreGasto ] = useState('');
    const [ cantidadGasto, guardarCantidadGasto ] = useState(0);
    const [ error, guardarError ] = useState(false); 


    // Guardar el gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if(cantidadGasto < 1 || isNaN( cantidadGasto ) || nombreGasto === '' ) {
            guardarError(true);
        }

        //Pasar el gasto el componente principal
    }


    return(
        <form 
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje="Todos los campos on obligatorios"/> : null}
            <div className="campo">
                <label htmlFor="gasto">Nombre del gasto</label>
                <input 
                    type="text"
                    id="gasto"
                    className="u-full-width"
                    placeholder="Ej: Refrigerio"
                    onChange={e => guardarNombreGasto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Cantidad del gasto</label>
                <input 
                    type="number"
                    id="cantidad"
                    className="u-full-width"
                    placeholder="Ej: 150"
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
    );

}
export default Formulario;