import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons'
import '../styles/PaginationButton.css'

export default function PaginationButton () {
  return (
    <div id='container-pagination'>
      <button>
        <FontAwesomeIcon icon={faInternetExplorer} />
      </button>
    </div>
  )
}
