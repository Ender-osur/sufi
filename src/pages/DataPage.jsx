import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faDownload, faSignOut } from '@fortawesome/free-solid-svg-icons'
import '../styles/dataPage.css'

export default function DataPage () {
  return (
    <div id='container-datapage'>
      <header className='container-header-nav'>
        <nav class='navbar'>
          <a href='#' id='container-logo'>
            <img src='src/assets/sufi_icon.png' alt='icon' />
          </a>
          <a href='#'>
            <span>Cerrar sesión</span>
            <FontAwesomeIcon icon={faSignOut} />
          </a>
        </nav>
        <section className='container-header-desembolsos'>
          <h1 id='title-datapage'>Mis desembolsos</h1>
          <a href='#' id='container-button'>
            <FontAwesomeIcon icon={faDownload} />
            <span>Descargar</span>
          </a>
        </section>
        <section className='container-filters'>
          <div className='filter'>
            <input id='filter-1' type='text' placeholder=' ' />
            <label htmlFor='filter-1'><FontAwesomeIcon icon={faAngleDown} />Tipo doc.</label>
          </div>
          <div className='filter'>
            <input id='filter-2' type='text' placeholder=' ' />
            <label htmlFor='filter-2'>Número de documento</label>
          </div>
          <div className='filter'>
            <input id='filter-3' type='text' placeholder=' ' />
            <label htmlFor='filter-3'>Número de desembolso</label>
          </div>
          <div className='filter'>
            <input id='filter-4' type='text' placeholder=' ' />
            <label htmlFor='filter-4'>Desde</label>
          </div>
          <div className='filter'>
            <input id='filter-5' type='text' placeholder=' ' />
            <label htmlFor='filter-5'>Hasta</label>
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
