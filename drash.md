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


import React, { useEffect, useState } from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import '../styles/SimpleTable.css'
import { API_DATA } from '../utils/Constants'

export default function SimpleTable () {
  const [data, setData] = useState([])
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_DATA)
        const jsonData = await response.json()
        setData(jsonData)
        const extractedColumns = extractColumns(jsonData)
        setColumns(extractedColumns)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
  console.log(table.getHeaderGroups())

  return (
    <div id='container-table'>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.date}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Assuming this function extracts columns based on the first data entry
const extractColumns = (data) => {
  if (data.length === 0) {
    return []
  }

  return Object.keys(data[0]).map((key) => ({
    header: key,
    accessorKey: key
  }))
}
