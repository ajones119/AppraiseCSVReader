import React from 'react';

const percentChangeStyle = {
    color: "yellow"
}

export const DataTableRowPercentChange = ({ tableColumns, title, colKey }) => {
  return (
    <tr>
        <td style={percentChangeStyle}>{title}</td>
        {tableColumns.map((column) => ( <td style={percentChangeStyle}>{column[colKey]}</td> ))}
    </tr>
  );
}
