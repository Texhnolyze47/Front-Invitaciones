import React from 'react';
import '../styles/Card.css';

function Testimonio(){
    return(
        <div className="card">
            
            <img
                className='logo-escihu' 
                src={require('../assets/logo.gif')} 
                alt='logo' 
            />
            <h3 className='text-info'>Ingresa a la organización</h3>
            <h2 className='title'>ESCIHU-GEEKS</h2>
            <p className='text-info'>Ingresa tu usuario de Github sin @</p>
            <input
                className='input' 
                type="text" 
            />
            <button className='send' type="submit">Ingresar</button>


        </div>
    );
}


export default Testimonio;