import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useCSVReader } from "react-papaparse";
import { MLSDataEntry } from "../model/MLSDataEntry";
import { TestModel } from "../model/testModel";

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

export const FileUploader = ({ setCSVData }) => {
    const { CSVReader } = useCSVReader();

    return (
        <>
            <CSVReader
                onUploadAccepted={(results) => {
                    console.log('---------------------------');
                    console.log(results);
                    const dataArray = [];
                    results.data.forEach(result => dataArray.push(new MLSDataEntry(
                        result[0], result[1], result[2], result[3], result[4], result[5], result[6],
                        result[7], result[8], result[9], result[10], result[11], result[12], result[13],
                        result[14], result[15], result[16], result[17], result[18], result[19], result[20],
                        result[21], result[22]
                    )))
                    setCSVData(dataArray);
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
                        <Button type='button' {...getRootProps()}>
                        Browse file
                        </Button>
                        <div style={styles.acceptedFile}>
                        {acceptedFile && acceptedFile.name}
                        </div>
                        <Button {...getRemoveFileProps()}>
                        Remove
                        </Button>
                    </div>
                    <ProgressBar style={styles.progressBarBackgroundColor} />
                    </>
                )}
            </CSVReader>
        </>
    );
}