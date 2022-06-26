import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import DatePicker from "react-date-picker";
import { DataDisplay } from "./DataDisplay";
import { FileDownloader } from "./FileDownloader";
import { FileUploader } from "./FileUploader";

const rowStyle = {
    margin: 'auto'
}

const color = {
    color: 'white'
}

export const PageView = () => {
    const [csvData, setCSVData] = useState();
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Container style={rowStyle}>
            <Row>
                <FileUploader setCSVData={setCSVData} />
            </Row>
            <Row>
                <FileDownloader fileData={csvData} />
                <DatePicker onChange={(date) => setStartDate(date)} value={startDate} />
            </Row>
            <Row>
                <DataDisplay fileData={csvData} startDate={startDate} />
                <h1>{startDate ? startDate.toString() : ""}</h1>
                <p style={color}>{JSON.stringify(csvData)}</p>
            </Row>
        </Container>
    );
}