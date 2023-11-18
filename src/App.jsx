import React from 'react'

export default function App () {
  return (
    <>
      <div>
        <img src='src\assets\dots_icon1.png' alt='puntos' className='images' />
        <img src='src\assets\dots_icon1.png' alt='puntos' className='images' />
        <img src='src\assets\elipse_icon1.png' alt='elipse' className='images' />
        <img src='src\assets\elipse_icon1.png' alt='elipse' className='images' />
        <img src='src\assets\triag_icon.png' alt='triag' className='images' />
        <img src='src\assets\triag_icon.png' alt='triag' className='images' />
      </div>
      <main>
        <div id='header'>
          <a href='#'>
            <img id='image-logo' src='src\assets\sufi_iconX2.png' alt='sufi' />
          </a>
          <h2 id='title'>Sufipay</h2>
          <h3 id='sub-title'>administrador comercial</h3>
        </div>
        <form />
        <form>
          <fieldset>
            <label for='username'>Usuario</label>
            <input type='email' id='username' placeholder='username' />
          </fieldset>
          <fieldset>
            <label for='password'>Contraseña</label>
            <input type='password' id='password' placeholder='contraseña' />
          </fieldset>
        </form>
        <button type='submit' className='btn'>
          Ingresar
        </button>
        <a id='recovery-field'>No recuerdo mi contraseña</a>
      </main>
    </>
  )
}
