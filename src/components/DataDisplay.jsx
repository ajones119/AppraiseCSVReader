import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { calculateAverage, calculateAveragePricePerSquareFoot, calculateAverageSalesPrice, calculateAverageSquareFeet, calculateMedianSalesPrice, getAverage, getMedian, getPercentageChange } from '../Utils/calculations';
import { BIYEARLY, QUARTERLY } from '../Utils/constants';
import { DataTable } from './DataTable';

const titleStyle = {
    color: "white"
}

export const DataDisplay = ({ fileData, startDate }) => {
  return (
    <Container>
        <Row>
           <DataTable fileData={fileData} startDate={startDate} title="Yearly" dateConstant={BIYEARLY} />
        </Row>
        <Row>
            <DataTable fileData={fileData} startDate={startDate} title="Quarterly" dateConstant={QUARTERLY} />
        </Row>
    </Container>
  );
}
