import React from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import data from '../data/MOCK_DATA.json'
import '../styles/SimpleTable.css'

export default function SimpleTable () {
  const columns = [
    {
      header: 'Fecha y hora',
      accessorKey: 'date'
    },
    {
      header: 'Número de reembolso',
      accessorKey: 'number'
    },
    {
      header: 'Tipo de documento',
      accessorKey: 'type'
    },
    {
      header: 'Número de documento',
      accessorKey: 'numberid'
    },
    {
      header: 'Monto',
      accessorKey: 'amount'
    }
  ]
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
  return (
    <div>
      <table>
        <thead>
          {
                table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.date}>
                    {
                            headerGroup.headers.map(header => (
                              <th key={header.date}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                              </th>
                            ))
                        }
                  </tr>
                ))
            }
        </thead>
        <tbody>
          {
                table.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      // eslint-disable-next-line react/jsx-key
                      <td>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}
