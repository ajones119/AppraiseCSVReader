import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { calculateAverage, calculateAveragePricePerSquareFoot, calculateAverageSalesPrice, calculateAverageSquareFeet, calculateAverageYearBuilt, calculateMedianSalesPrice, getAverage, getMedian, getMode, getPercentageChange } from '../Utils/calculations';
import { DataTableRow } from './DataTableRows/DataTableRow';
import { DataTableRowDollars } from './DataTableRows/DataTableRowDollars';
import { DataTableRowFeet } from './DataTableRows/DataTableRowFeet';
import { DataTableRowModeDollars } from './DataTableRows/DataTableRowModeDollars';
import { DataTableRowModeFeet } from './DataTableRows/DataTableRowModeFeet';
import { DataTableRowModeYears } from './DataTableRows/DataTableRowModeYears';
import { DataTableRowPercentChange } from './DataTableRows/DataTableRowPercentChange';
import { DataTableRowYears } from './DataTableRows/DataTableRowYears';

const titleStyle = {
    color: "white"
}

const percentChangeStyle = {
    color: "yellow"
}

export const DataTable = ({ title, dateConstant, tableColumns }) => {

  return (
    <Row>
        <h1>{title}</h1>
        <Table striped bordered hover size="sm" variant='dark'>
            <thead>
                <tr>
                    <th>Type</th>
                    {dateConstant.map((interval) => <th>{interval.columnName}</th>)}
                </tr>
            </thead>
            <tbody>
                <DataTableRowDollars tableColumns={tableColumns} title="Average Sales Price" colKey="averageSalesPrice" />
                <DataTableRowPercentChange tableColumns={tableColumns} title="Average Sales Price Percent Change" colKey="percentChangeAverageSalesPrice" />
                <DataTableRowDollars tableColumns={tableColumns} title="Median Sales Price" colKey="medianSalesPrice" />
                <DataTableRowPercentChange tableColumns={tableColumns} title="Median Sales Price Percent Change" colKey="percentChangeMedianSalesPrice" />
                <DataTableRowModeDollars tableColumns={tableColumns} title="Sales Price Mode (min/max)" modeColKey="modeSalePrice" minColKey="minSalePrice" maxColKey="maxSalePrice"/>
                <DataTableRowDollars tableColumns={tableColumns} title="Average Price Per Square Foot" colKey="averagePricePerSquareFoot" />
                <DataTableRowPercentChange tableColumns={tableColumns} title="Average Price Per Square Foot Percent Change" colKey="percentChangeAveragePricePerSquareFoot" />
                <DataTableRowFeet tableColumns={tableColumns} title="Average Square Feet" colKey="averageSquareFeet" />
                <DataTableRowPercentChange tableColumns={tableColumns} title="Average Square Feet Percent Change" colKey="percentChangeAverageSquareFeet" />
                <DataTableRowModeFeet tableColumns={tableColumns} title="Square Feet Mode (min/max)" modeColKey="modeSquareFeet" minColKey="minSquareFeet" maxColKey="maxSquareFeet"/>
                <DataTableRowFeet tableColumns={tableColumns} title="Median Square Feet" colKey="medianSquareFeet" />
                <DataTableRowPercentChange tableColumns={tableColumns} title="Median Square Feet Percent Change" colKey="percentChangeMedianSquareFeet" />
                <DataTableRowYears tableColumns={tableColumns} title="Average Year Built" colKey="averageYearBuilt" />
                <DataTableRowYears tableColumns={tableColumns} title="Median Year Built" colKey="medianYearBuilt" />
                <DataTableRowModeYears tableColumns={tableColumns} title="Year Built Mode (min/max)" modeColKey="modeYearBuilt" minColKey="minYearBuilt" maxColKey="maxYearBuilt"/>
                <DataTableRow tableColumns={tableColumns} title="Number of Entries" colKey="numOfEntries" />
            </tbody>
        </Table>
    </Row>
  );
}