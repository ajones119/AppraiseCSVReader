import React from 'react';

export const DataTableRowFeet = ({ tableColumns, title, colKey }) => {
  return (
    <tr>
        <td>{title}</td>
        {tableColumns.map((column) => ( <td>{column[colKey].toLocaleString()} feet</td> ))}
    </tr>
  );
}
