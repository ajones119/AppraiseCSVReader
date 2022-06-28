import React from 'react';

export const DataTableRowYears = ({ tableColumns, title, colKey }) => {
  return (
    <tr>
        <td>{title}</td>
        {tableColumns.map((column) => (<td>{Math.round(column[colKey])} ({new Date().getFullYear() - Math.round(column[colKey])} year(s) old)</td> ))}
    </tr>
  );
}
