import React from 'react'

export default function DataPage () {
  return (
    <nav class='navbar navbar-expand-lg bg-light navbar-light '>
      <div class='container-fluid'>
        <button class='navbar-toggler' type='button' data-mdb-toggle='collapse' data-mdb-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <i class='fas fa-bars' />
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <a class='nav-link' href='#'>Link</a>
            </li>
          </ul>
          <ul class='navbar-nav d-flex flex-row me-1'>
            <li class='nav-item me-3 me-lg-0'>
              <a class='nav-link' href='#'><i class='fas fa-shopping-cart' /></a>
            </li>
            <li class='nav-item me-3 me-lg-0'>
              <a class='nav-link' href='#'><i class='fab fa-twitter' /></a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
