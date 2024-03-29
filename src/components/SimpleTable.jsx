import React, { useState, useEffect } from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { API_DATA } from '../utils/Constants'
import '../styles/SimpleTable.css'

const SimpleTable = () => {
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await fetch(API_DATA)
        const apiData = await response.json()

        const customHeaders = {
          date: 'Fecha y hora',
          number: 'Número de Reembolso',
          type: 'Tipo de Documento',
          numberid: 'Número de Documento',
          amount: 'Monto'
        }

        const customColumns = Object.keys(customHeaders).map(key => ({
          header: customHeaders[key],
          accessorKey: key
        }))

        setColumns(customColumns)
        setData(apiData)
      } catch (error) {
        console.error('Error al obtener datos:', error)
      }
    }

    fetchTableData()
  }, [])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div id='container-table'>
      <div className='table-wrapper'>
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SimpleTable
