import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/PaginationButton.css'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function PaginationButton () {
  return (
    <div id='container-pagination'>
      <button>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <input>
      </input>
      <button>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  )
}
