import React from 'react'
import '../styles/RegisterPage.css'

export default function RegisterPage () {
  return (
    <div className='register-container'>
      <h2>Registro de Usuario</h2>
      <form className='register-form'>
        <div className='form-group'>
          <label htmlFor='username'>Nombre de Usuario</label>
          <input type='text' id='username' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Correo Electrónico</label>
          <input type='email' id='email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Contraseña</label>
          <input type='password' id='password' required />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirmar Contraseña</label>
          <input type='password' id='confirmPassword' required />
        </div>
        <button type='submit' className='register-button'>
          Registrarse
        </button>
      </form>
    </div>
  )
}
