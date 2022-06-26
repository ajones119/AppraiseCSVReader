import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { calculateAverage, calculateAveragePricePerSquareFoot, calculateAverageSalesPrice, calculateMedian, getAverage, getMedian, getPercentageChange } from '../Utils/calculations';
import { FOUR_TO_SIX_MONTHS, NINETEEN_TO_TWENTY_ONE_MONTHS, SEVEN_TO_NINE_MONTHS, SIXTEEN_TO_EIGHTEEN_MONTHS, TEN_TO_TWELVE_MONTHS, THIRTEEN_TO_FIFTEEN_MONTHS, THIRTEEN_TO_TWENTY_FOUR_MONTHS, TWENTY_TWO_TO_TWENTY_FOUR_MONTHS, ZERO_TO_THREE_MONTHS, ZERO_TO_TWELVE_MONTHS, ZERO_TO_TWENTY_FOUR_MONTHS } from '../Utils/constants';

const titleStyle = {
    color: "white"
}

export const DataDisplay = ({ fileData, startDate }) => {
  return (
    <Container>
        <Row>
        <h1 style={titleStyle} >Yearly</h1>
        <Table striped bordered hover size="sm" variant='dark'>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>1-12</th>
                    <th>13-24</th>
                    <th>0-24</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Average</td>
                    <td>{startDate ? getAverage(fileData, startDate, ZERO_TO_TWELVE_MONTHS, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, THIRTEEN_TO_TWENTY_FOUR_MONTHS, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, ZERO_TO_TWENTY_FOUR_MONTHS, calculateAverageSalesPrice) : ""}</td>
                </tr>
                <tr>
                    <td>Percent Change</td> 
                    <td>{startDate ? getPercentageChange(ZERO_TO_TWELVE_MONTHS, THIRTEEN_TO_TWENTY_FOUR_MONTHS, startDate, fileData, calculateAverageSalesPrice) : ""}</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Average Price Per Square Foot</td>
                    <td>{startDate ? getAverage(fileData, startDate, ZERO_TO_TWELVE_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, THIRTEEN_TO_TWENTY_FOUR_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, ZERO_TO_TWENTY_FOUR_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                </tr>
                <tr>
                    <td>Percent Change</td>
                    <td>{startDate ? getPercentageChange(ZERO_TO_TWELVE_MONTHS, THIRTEEN_TO_TWENTY_FOUR_MONTHS, startDate, fileData, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Median</td>
                    <td>{startDate ? getMedian(fileData, startDate, ZERO_TO_TWELVE_MONTHS, calculateMedian) : ""}</td>
                    <td>{startDate ? getMedian(fileData, startDate, THIRTEEN_TO_TWENTY_FOUR_MONTHS, calculateMedian) : ""}</td>
                    <td>{startDate ? getMedian(fileData, startDate, ZERO_TO_TWENTY_FOUR_MONTHS, calculateMedian) : ""}</td>
                </tr>
            </tbody>
        </Table>
    </Row>
    <Row>
            <h1 style={titleStyle} >Quarterly</h1>
        <Table striped bordered hover size="sm" variant='dark'>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>0-3 (Q1)</th>
                    <th>4-6 (Q2)</th>
                    <th>7-9 (Q3)</th>
                    <th>10-12 (Q4)</th>
                    <th>13-15 (Q1)</th>
                    <th>16-18 (Q2)</th>
                    <th>19-21 (Q3)</th>
                    <th>22-24 (Q4)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Average</td>
                    <td>{startDate ? getAverage(fileData, startDate, ZERO_TO_THREE_MONTHS, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, FOUR_TO_SIX_MONTHS, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, SEVEN_TO_NINE_MONTHS, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, TEN_TO_TWELVE_MONTHS, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, THIRTEEN_TO_FIFTEEN_MONTHS, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, SIXTEEN_TO_EIGHTEEN_MONTHS, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, NINETEEN_TO_TWENTY_ONE_MONTHS, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, TWENTY_TWO_TO_TWENTY_FOUR_MONTHS, calculateAverageSalesPrice) : ""}</td>
                </tr>
                <tr>
                    <td>Percent Change</td>
                    <td>{startDate ? getPercentageChange(ZERO_TO_THREE_MONTHS, THIRTEEN_TO_FIFTEEN_MONTHS, startDate, fileData, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getPercentageChange(FOUR_TO_SIX_MONTHS, SIXTEEN_TO_EIGHTEEN_MONTHS, startDate, fileData, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getPercentageChange(SEVEN_TO_NINE_MONTHS, NINETEEN_TO_TWENTY_ONE_MONTHS, startDate, fileData, calculateAverageSalesPrice) : ""}</td>
                    <td>{startDate ? getPercentageChange(TEN_TO_TWELVE_MONTHS, TWENTY_TWO_TO_TWENTY_FOUR_MONTHS, startDate, fileData, calculateAverageSalesPrice) : ""}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Average Price Per Square Foot</td>
                    <td>{startDate ? getAverage(fileData, startDate, ZERO_TO_THREE_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, FOUR_TO_SIX_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, SEVEN_TO_NINE_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, TEN_TO_TWELVE_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, THIRTEEN_TO_FIFTEEN_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, SIXTEEN_TO_EIGHTEEN_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, NINETEEN_TO_TWENTY_ONE_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getAverage(fileData, startDate, TWENTY_TWO_TO_TWENTY_FOUR_MONTHS, calculateAveragePricePerSquareFoot) : ""}</td>
                </tr>
                                    <tr>
                    <td>Percent Change</td>
                    <td>{startDate ? getPercentageChange(ZERO_TO_THREE_MONTHS, THIRTEEN_TO_FIFTEEN_MONTHS, startDate, fileData, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getPercentageChange(FOUR_TO_SIX_MONTHS, SIXTEEN_TO_EIGHTEEN_MONTHS, startDate, fileData, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getPercentageChange(SEVEN_TO_NINE_MONTHS, NINETEEN_TO_TWENTY_ONE_MONTHS, startDate, fileData, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>{startDate ? getPercentageChange(TEN_TO_TWELVE_MONTHS, TWENTY_TWO_TO_TWENTY_FOUR_MONTHS, startDate, fileData, calculateAveragePricePerSquareFoot) : ""}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Median</td>
                    <td>{startDate ? getMedian(fileData, startDate, ZERO_TO_THREE_MONTHS, calculateMedian) : ""}</td>
                    <td>{startDate ? getMedian(fileData, startDate, FOUR_TO_SIX_MONTHS, calculateMedian) : ""}</td>
                    <td>{startDate ? getMedian(fileData, startDate, SEVEN_TO_NINE_MONTHS, calculateMedian) : ""}</td>
                    <td>{startDate ? getMedian(fileData, startDate, TEN_TO_TWELVE_MONTHS, calculateMedian) : ""}</td>
                    <td>{startDate ? getMedian(fileData, startDate, THIRTEEN_TO_FIFTEEN_MONTHS, calculateMedian) : ""}</td>
                    <td>{startDate ? getMedian(fileData, startDate, SIXTEEN_TO_EIGHTEEN_MONTHS, calculateMedian) : ""}</td>
                    <td>{startDate ? getMedian(fileData, startDate, NINETEEN_TO_TWENTY_ONE_MONTHS, calculateMedian) : ""}</td>
                    <td>{startDate ? getMedian(fileData, startDate, TWENTY_TWO_TO_TWENTY_FOUR_MONTHS, calculateMedian) : ""}</td>
                </tr>
            </tbody>
        </Table>
    </Row>
    </Container>
  );
}