import React from 'react';
import axios from 'axios';
import logo from '../assets/Logo.png';
import '../styles/Card.css';

export default class NewUser extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`http://localhost:8080/users/add`, {
        user: user.value
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className='card'>
        <h1 className='title'>Bienvenido <br />ESCIHU WIZARDS</h1>
        <img src={logo} alt="Logo Escihu Wizards" className='logo'/>
        <p className='text-info'>Coloca el correo de tu cuenta de Github</p>
        <form onSubmit={this.handleSubmit} className="formData">
          <label>
            <input 
                type="text" 
                name="name" 
                onChange={this.handleChange} 
                className='input' 
                placeholder='example@example.com'/>
          </label>
          <button type="submit" className='send'> Ingresar</button>
        </form>
      </div>
    )
  }
}