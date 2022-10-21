import React from 'react';
import '../styles/Card.css';

function Testimonio(){
    return(

        // <React.Fragment>
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
                className='email' 
                type="email" 
                required
            />
            <button className='send' type="submit" onClick={() => alert('Hola')}>Ingresar</button>

        </div>
        // </React.Fragment>
    );
}

export default Testimonio;