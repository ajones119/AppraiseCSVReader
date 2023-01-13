import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-date-picker";
import Switch from "react-switch";
import { YEARLY, QUARTERLY } from "../Utils/constants";
import { DataDisplay } from "./DataDisplay";
import { FileDownloader } from "./FileDownloader";
import { FileUploader } from "./FileUploader";

const rowStyle = {
    margin: 'auto',
    paddingTop: '25px'
}


export const PageView = () => {
    const [csvData, setCSVData] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [isYearly, setIsYearly] = useState(true);

    return (
        <Container style={rowStyle}>
            <Row>
                <FileUploader setCSVData={setCSVData} />
            </Row>
            <Row>
                <Col>
                    <DatePicker onChange={(date) => setStartDate(date)} value={startDate}/>
                </Col>
                <Col>
                    Quarterly <Switch onChange={() => setIsYearly(!isYearly)} checked={isYearly} uncheckedIcon={false} checkedIcon={false} /> Yearly
                </Col>
            </Row>
            <Row>
                {
                    (startDate && csvData && isYearly) ? <DataDisplay fileData={csvData} startDate={startDate} title="Yearly" dateConstant={YEARLY} /> : ""
                }
                {
                    (startDate && csvData && !isYearly) ? <DataDisplay fileData={csvData} startDate={startDate} title="Quarterly" dateConstant={QUARTERLY} isQuarterly /> : ""
                }
            </Row>
        </Container>
    );
}

//<FileDownloader fileData={csvData} />
//<h1>{startDate ? startDate.toString() : ""}</h1>
//<p style={color}>{JSON.stringify(csvData)}</p>