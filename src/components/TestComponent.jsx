import React, { useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { useCSVReader } from "react-papaparse";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

const styles = {
  csvReader: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  browseFile: {
    width: '20%',
  },
  acceptedFile: {
    border: '1px solid #ccc',
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: '80%',
  },
  remove: {
    borderRadius: 0,
    padding: '0 20px',
  },
  progressBarBackgroundColor: {
    backgroundColor: 'red',
  },
};

export const TestComponent = () => {
    const { CSVReader } = useCSVReader();
    const [csvdata, setcsvData] = useState();

    return (
        <>
            <CSVReader
                onUploadAccepted={(results) => {
                    console.log('---------------------------');
                    console.log(results);
                    setcsvData(results.data);
                    console.log('---------------------------');
                }}
            >
                {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                }) => (
                    <>
                    <div style={styles.csvReader}>
                        <button type='button' {...getRootProps()} style={styles.browseFile}>
                        Browse file
                        </button>
                        <div style={styles.acceptedFile}>
                        {acceptedFile && acceptedFile.name}
                        </div>
                        <button {...getRemoveFileProps()} style={styles.remove}>
                        Remove
                        </button>
                    </div>
                    <ProgressBar style={styles.progressBarBackgroundColor} />
                    </>
                )}
            </CSVReader>
            <p>{JSON.stringify(csvdata)}</p>
        </>
    );
}