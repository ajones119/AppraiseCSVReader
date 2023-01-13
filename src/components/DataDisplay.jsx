import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { calculateAveragePricePerSquareFoot, calculateAverageSalesPrice, calculateAverageSquareFeet, calculateAverageYearBuilt, getAverage, getMedian, getMode, getNumberOfEntries, getPercentageChange } from '../Utils/calculations';
import { getQuarterlyPercentageChangeRows, getYearlyPercentageChangeRows } from '../Utils/DataTableHelpers';
import { DataChart } from './DataChart';
import { DataTable } from './DataTable';


export const DataDisplay = ({ fileData, startDate, dateConstant, title, isQuarterly }) => {
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
                column.numOfEntries = getNumberOfEntries(fileData, startDate, interval.lowOffset, interval.highOffset);

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

            if (isQuarterly) {
                getQuarterlyPercentageChangeRows(table, dateConstant.length)
            } else {
                getYearlyPercentageChangeRows(table, dateConstant.length)
            }


            setTableColumns([...table]);
        } else {
            setTableColumns([]);
        }
    }, [fileData, startDate, dateConstant]);

  return (
    <Container>
        <Row>
           <DataTable title={title} tableColumns={tableColumns} dateConstant={dateConstant} />
        </Row>
        <Row>
            <DataChart
            tableColumns={tableColumns}
            dateConstant={dateConstant}
            title="Sales Price"
            titleArray={["Average Sales Price", "Median Sales Price", "Mode Sales Price"]}
            keyArray={["averageSalesPrice", "medianSalesPrice", "modeSalePrice"]}
            />
        </Row>
        <Row>
            <DataChart
            tableColumns={tableColumns}
            dateConstant={dateConstant}
            title="Square Feet"
            titleArray={["Average Square Feet", "Median Square Feet", "Mode Square Feet"]}
            keyArray={["averageSquareFeet", "medianSquareFeet", "modeSquareFeet"]}
            />
        </Row>
        <Row>
            <DataChart
            tableColumns={tableColumns}
            dateConstant={dateConstant}
            title="Year Built"
            titleArray={["Average Year Built", "Median Year Built"]}
            keyArray={["averageYearBuilt", "medianYearBuilt"]}
            />
        </Row>
    </Container>
  );
}
