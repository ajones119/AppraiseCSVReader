import React from 'react';

import { useCSVDownloader } from 'react-papaparse';

export const FileDownloader = ({ fileData }) => {
  const { CSVDownloader, Type } = useCSVDownloader();

  return (
    <CSVDownloader
      type={Type.Button}
      filename={'filename'}
      bom={true}
      config={{
        delimiter: ',',
      }}
      data={fileData}
    >
      Download
    </CSVDownloader>
  );
}