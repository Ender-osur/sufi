import React from 'react'
import '../styles/loginPage.css'
import { useNavigate } from 'react-router-dom'

export default function LoginPage () {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/data')
  }
  const handleRegister = () => {
    navigate('/register')
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
      <main>
        <div id='header'>
          <a id='container-image-logo' href='#'>
            <img id='image-logo' src='src\assets\sufi_iconX2.png' alt='sufi' />
          </a>
          <h2 id='title'>
            Sufipay
          </h2>
          <h3 id='sub-title'>
            Administrador comercial
          </h3>
        </div>
        <form id='myForm'>
          <div id='container-inputs'>
            <fieldset className='input-field' id='user-field'>
              <label htmlFor='username' className='label-form'>
                Usuario
              </label>
              <input
                className='text-input'
                type='email'
                id='username'
                placeholder='mail@usermail.com'
                required
              />
            </fieldset>
            <fieldset className='input-field' id='password-field'>
              <label htmlFor='password' className='label-form'>
                Contraseña
              </label>
              <input
                className='text-input'
                type='password'
                id='password'
                placeholder='contraseña'
                required
              />
            </fieldset>
          </div>
          <button onClick={handleLogin} type='submit' id='btn'>
            <span id='btn-span'>INGRESAR</span>
          </button>
        </form>
        <a href='#' id='recovery-field' onClick={handleRegister}>
          No recuerdo mi contraseña
        </a>
      </main>
    </>
  )
}
