import React from "react";
import '..hojas-de-estilo/Testimonio.css';

function testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img 
                className="imagen-testimonio" 
                src= {require (`../imagenes/testimonio-${props.imagen}.png`)}
                alt='foto de Emma' />
            <div className='contenedor-texto-testimonio'>
                <p className="nombre-testimonio">{props.nombre} in {props.pais} </p>
                <p className="cargo-testimonio">{props.cargo} at {props.empresa}</p>
                <p className="texto-testimonio">"{props.testimonio}"</p>

            </div>
        </div>
    );
}

export default testimonio;