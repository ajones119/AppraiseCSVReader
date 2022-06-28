import React from 'react';

const modeStyle = {
    color: "lime"
}

export const DataTableRowModeDollars = ({ tableColumns, title, modeColKey, minColKey, maxColKey }) => {
  return (
    <tr>
        <td style={modeStyle}>{title}</td>
        {tableColumns.map((column) => ( <td style={modeStyle}>${column[modeColKey].toLocaleString()} (${column[minColKey].toLocaleString()}/${column[maxColKey].toLocaleString()})</td> ))}
    </tr>
  );
}