import React, {useState} from 'react';

export default function ComponenteFuncional() {
    const [saludo, setSaludo]=useState('Problema 1 - Componente funcional');
    return(
        <div className="Contenedor">
            {saludo}
            <div></div>
            <a onClick={()=>setSaludo('Actualizado componente funcional')}>click</a>
        </div>
    );
}

