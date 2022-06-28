import React from 'react';

const modeStyle = {
    color: "lime"
}

export const DataTableRowModeFeet = ({ tableColumns, title, modeColKey, minColKey, maxColKey }) => {
  return (
    <tr>
        <td style={modeStyle}>{title}</td>
        {tableColumns.map((column) => ( <td style={modeStyle}>{column[modeColKey].toLocaleString()} feet ({column[minColKey].toLocaleString()}/{column[maxColKey].toLocaleString()})</td> ))}
    </tr>
  );
}