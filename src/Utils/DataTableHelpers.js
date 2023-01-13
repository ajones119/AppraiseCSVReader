import { getPercentageChange } from "./calculations";

export function getYearlyPercentageChangeRows(table, length) {
    for (let i = 0; i < length; i++) {
      if (i < Math.floor(table.length / 2)) {
        const soonColumn = table[i];
        const lateColumn = table[Math.floor(table.length / 2) + i];
               getPercentageChangeRows(table, soonColumn, lateColumn, i);

      } else {
        getEmptyColumn(table, i);
      }
    }
}

export function getQuarterlyPercentageChangeRows(table, length) {
  for (let i = 0; i < length; i++) {
    if (i < length - 1) {
      const soonColumn = table[i];
      const lateColumn = table[i + 1];
       getPercentageChangeRows(table, soonColumn, lateColumn, i);
    } else {
        getEmptyColumn(table, i);
    }
  }
}

function getPercentageChangeRows(table, soonColumn, lateColumn, index) {
    table[index].percentChangeAverageSalesPrice = getPercentageChange(
    Number(soonColumn.averageSalesPrice),
    Number(lateColumn.averageSalesPrice)
    );
    table[index].percentChangeMedianSalesPrice = getPercentageChange(
    Number(soonColumn.medianSalesPrice),
    Number(lateColumn.medianSalesPrice)
    );
    table[index].percentChangeAveragePricePerSquareFoot =
    getPercentageChange(
        Number(soonColumn.averagePricePerSquareFoot),
        Number(lateColumn.averagePricePerSquareFoot)
    );
    table[index].percentChangeAverageSquareFeet = getPercentageChange(
    Number(soonColumn.averageSquareFeet),
    Number(lateColumn.averageSquareFeet)
    );
    table[index].percentChangeMedianSquareFeet = getPercentageChange(
    Number(soonColumn.medianSquareFeet),
    Number(lateColumn.medianSquareFeet)
    );
}

function getEmptyColumn(table, index) {
    table[index].percentChangeAverageSalesPrice = "-";
    table[index].percentChangeMedianSalesPrice = "-";
    table[index].percentChangeAveragePricePerSquareFoot = "-";
    table[index].percentChangeAverageSquareFeet = "-";
    table[index].percentChangeMedianSquareFeet = "-";
}