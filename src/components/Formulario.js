import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';


// Formulario para agregar los gatos
function Formulario(props) {

    const { guardarGasto, guardarCrearGasto } = props;
    
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

        
        // Construir objeto de gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        //Pasar el gasto el componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // Eliminar el error
        guardarError(false);

        // Limpiar el form
        guardarNombreGasto('');
        guardarCantidadGasto('');
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
                    value={nombreGasto}
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
                    value={cantidadGasto}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
    );

}
export default Formulario;