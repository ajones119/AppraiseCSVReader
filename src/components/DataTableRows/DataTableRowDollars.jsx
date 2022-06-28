import React from 'react';

export const DataTableRowDollars = ({ tableColumns, title, colKey }) => {
  return (
    <tr>
        <td>{title}</td>
        {tableColumns.map((column) => ( <td>${column[colKey].toLocaleString()}</td> ))}
    </tr>
  );
}
