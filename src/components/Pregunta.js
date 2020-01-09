import React, { Fragment, useState } from 'react';

function Pregunta () {

    // Definicion del state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // Validar presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // Validacion correcta
    }
    return(
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <p className="alert alert-danger error">El presupuesto ingresado no es valido</p> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="Agrega tu presupuesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;