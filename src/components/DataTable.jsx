import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { calculateAverage, calculateAveragePricePerSquareFoot, calculateAverageSalesPrice, calculateAverageSquareFeet, calculateAverageYearBuilt, calculateMedianSalesPrice, getAverage, getMedian, getMode, getPercentageChange } from '../Utils/calculations';
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

export const DataTable = ({ fileData, startDate, title, dateConstant }) => {

    const [tableColumns, setTableColumns] = useState([])


    useEffect(() => {
        if(fileData && startDate) {

            const table = [];
            const column = {}

            dateConstant.forEach((interval) => {
                column.averageSalesPrice = getAverage(fileData, startDate, interval.lowOffset, interval.highOffset, calculateAverageSalesPrice)
                column.medianSalesPrice = getMedian(fileData, startDate, interval.lowOffset, interval.highOffset, "salePrice");
                column.averagePricePerSquareFoot = getAverage(fileData, startDate, interval.lowOffset, interval.highOffset, calculateAveragePricePerSquareFoot);
                column.averageSquareFeet = getAverage(fileData, startDate, interval.lowOffset, interval.highOffset, calculateAverageSquareFeet);
                column.medianSquareFeet = getMedian(fileData, startDate, interval.lowOffset, interval.highOffset, "GLA");
                column.averageYearBuilt = getAverage(fileData, startDate, interval.lowOffset, interval.highOffset, calculateAverageYearBuilt);
                column.medianYearBuilt = getMedian(fileData, startDate, interval.lowOffset, interval.highOffset, "yearBuilt");

                let SalePriceModeObject = getMode(fileData, startDate, interval.lowOffset, interval.highOffset, "salePrice");
                column.maxSalePrice = Number(SalePriceModeObject.max);
                column.minSalePrice = Number(SalePriceModeObject.min);
                column.modeSalePrice = Number(SalePriceModeObject.mode);

                let SquareFeetModeObject = getMode(fileData, startDate, interval.lowOffset, interval.highOffset, "GLA");
                column.maxSquareFeet = Number(SquareFeetModeObject.max);
                column.minSquareFeet = Number(SquareFeetModeObject.min);
                column.modeSquareFeet = Number(SquareFeetModeObject.mode);

                let YearBuiltModeObject = getMode(fileData, startDate, interval.lowOffset, interval.highOffset, "yearBuilt");
                column.maxYearBuilt = Number(YearBuiltModeObject.max);
                column.minYearBuilt = Number(YearBuiltModeObject.min);
                column.modeYearBuilt = Number(YearBuiltModeObject.mode);

                table.push({...column});
            });

            for (let i = 0; i < dateConstant.length; i++) {
                if(i < Math.floor(table.length/2)) {
                const columnOne = table[i];
                const columnTwo = table[Math.ceil(table.length/2) + i];
                table[i].percentChangeAverageSalesPrice =  getPercentageChange(Number(columnOne.averageSalesPrice), Number(columnTwo.averageSalesPrice));
                table[i].percentChangeMedianSalesPrice = getPercentageChange(Number(columnOne.medianSalesPrice), Number(columnTwo.medianSalesPrice));
                table[i].percentChangeAveragePricePerSquareFoot = getPercentageChange(Number(columnOne.averagePricePerSquareFoot), Number(columnTwo.averagePricePerSquareFoot));
                table[i].percentChangeAverageSquareFeet = getPercentageChange(Number(columnOne.averageSquareFeet), Number(columnTwo.averageSquareFeet));
                table[i].percentChangeMedianSquareFeet = getPercentageChange(Number(columnOne.medianSquareFeet), Number(columnTwo.medianSquareFeet));

                } else {
                    table[i].percentChangeAverageSalesPrice = "-";
                    table[i].percentChangeMedianSalesPrice = "-";
                    table[i].percentChangeAveragePricePerSquareFoot = "-";
                    table[i].percentChangeAverageSquareFeet = "-";
                    table[i].percentChangeMedianSquareFeet = "-";
                }
            }
            //console.log(table);
            setTableColumns([...table]);
        } else {
            setTableColumns([]);
        }
    }, [fileData, startDate, dateConstant]);


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
            </tbody>
        </Table>
    </Row>
  );
}