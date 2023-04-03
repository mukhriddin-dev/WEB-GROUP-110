import React from 'react'

const TableRow = ({ ind, data }) => {
  return (
    <tr>
      <td>{ind + 1}</td> <td>{data.title}</td> <td>true</td>
      <td>
        <button>EDIT</button>
      </td>
      <td>
        <button>DELETE</button>
      </td>
    </tr>
  )
}

export default TableRow
