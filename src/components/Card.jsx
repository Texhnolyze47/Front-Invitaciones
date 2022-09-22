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
                required
            />
            <button className='send' type="submit" onClick={() => h()}>Ingresar</button>


        </div>
    );
}

function h(){
    const user = document.querySelector('.input').value;

    const url = `https://api.github.com/users/${user}`;

    fetch(url, { 
                 headers: {
                      'Accept' : 'application/vnd.github.v3+json'
                  }})
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
                    alert('Usuario encontrado');
                    console.log(data);
                })
		.catch( error => {
            console.error(error)
            alert('Usuario no encontrado');
        });




    // fetch(url).then((res) => {
    //     if (res.status !== "200") {
    //         console.log(res);
    //         alert('Usuario encontrado');
    //     }
    //     else {
    //         return res.json();
    //     }
    // }).then((data) => {
    //         console.log(data)
    // })

}



export default Testimonio;