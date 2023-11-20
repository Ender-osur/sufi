import React from 'react'
import '../styles/RegisterPage.css'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage () {
  const navigate = useNavigate()

  const handleReturn = () => {
    navigate('/')
  }
  return (
    <>
      <div>
        <img src='src/assets/dots_icon1.png' alt='puntos' className='images' id='punto-der' />
        <img src='src/assets/dots_icon1.png' alt='puntos' className='images' id='punto-izq' />
        <img src='src/assets/elipse_icon1.png' alt='elipse' className='images' id='elipse-der' />
        <img src='src/assets/elipse_icon1.png' alt='elipse' className='images' id='elipse-izq' />
        <img src='src/assets/triag_icon.png' alt='triag' className='images' id='triag-der' />
        <img src='src/assets/triag_icon.png' alt='triag' className='images' id='triag-izq' />
      </div>
      <div className='container-register'>
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
          <button type='button' className='cancel-button' onClick={handleReturn}>
            Cancelar
          </button>
        </form>
      </div>
    </>
  )
}
