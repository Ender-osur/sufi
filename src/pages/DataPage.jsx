import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCancel, faClose, faDownload, faSignOut } from '@fortawesome/free-solid-svg-icons'
import '../styles/dataPage.css'

export default function DataPage () {
  return (
    <div id='container-datapage'>
      <header className='container-header-nav'>
        <nav class='navbar'>
          <a href='#' id='container-logo'>
            <img src='src/assets/sufi_icon.png' alt='sufi icon' />
          </a>
          <a id='container-logout' href='#'>
            <span>Cerrar sesión</span>
            <FontAwesomeIcon className='icons' id='icon-lo' icon={faSignOut} />
          </a>
        </nav>
        <section className='container-header-desembolsos'>
          <h1 id='title-datapage'>Mis desembolsos</h1>
          <a href='#' id='container-button'>
            <FontAwesomeIcon id='icon-dl' icon={faDownload} />
            <span>Descargar</span>
          </a>
        </section>
        <section className='container-filters'>
          <div className='filters'>
            <input id='filter-1' type='button' placeholder=' ' />
            <label htmlFor='filter-1'><FontAwesomeIcon className='icons' id='icon-cl' icon={faClose} /></label>
          </div>
          <div className='filters'>
            <input id='filter-2' type='text' placeholder=' ' />
            <label htmlFor='filter-2'>Tipo doc.</label>
            <FontAwesomeIcon className='icons' id='icon-al' icon={faAngleDown} />
          </div>
          <div className='filters'>
            <input id='filter-3' type='number' placeholder=' ' />
            <label htmlFor='filter-3'>Número de documento</label>
          </div>
          <div className='filters'>
            <input id='filter-4' type='number' placeholder=' ' />
            <label htmlFor='filter-4'>Número de desembolso</label>
          </div>
          <div className='filters'>
            <input id='filter-5' type='date' placeholder=' ' />
            <label htmlFor='filter-5'>Desde</label>
          </div>
          <div className='filters'>
            <input id='filter-6' type='date' placeholder=' ' />
            <label htmlFor='filter-6'>Hasta</label>
          </div>
        </section>
      </header>
      <main className='container-table'>
        <table class='table'>
          <thead>
            <tr>
              <th scope='col'>Fecha y hora</th>
              <th scope='col'>Número de desembolso</th>
              <th scope='col'>Tipo de documento</th>
              <th scope='col'>Número de documento</th>
              <th scope='col'>Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colspan='2'>Larry the Bird</td>
              <td>@twitter</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
