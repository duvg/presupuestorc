import React from 'react';
import Gasto from './Gasto';

function ListadoGastos ({gastos}) {
    console.log(gastos);
    return(
        <div className="gastos-realizados">
            <h3>Listao</h3>
            {gastos.map(gasto => (
                
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
    );
}


export default ListadoGastos;