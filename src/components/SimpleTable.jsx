import React from 'react'
import { useReactTable } from '@tanstack/react-table'
import data from '../data/MOCK_DATA.json'

export default function SimpleTable () {
  const columns = [
    {
      header: 'Fecha y hora',
      accessorkey: 'date'
    },
    {
      header: 'Número de reembolso',
      accessorkey: 'number'
    },
    {
      header: 'Tipo de documento',
      accessorkey: 'type'
    },
    {
      header: 'Número de documento',
      accessorkey: 'numberid'
    },
    {
      header: 'Monto',
      accessorkey: 'amount'
    }
  ]
  const table = useReactTable({ data, columns})
  return (
    <div>
      <table>
        <thead>
            {
                table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.date} >
                        {
                            headerGroup.headers.map(header => (
                                <th key={header.date}>
                                    {header.column.columnDef.header}
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
      </table>
    </div>
  )
}
