import { getPercentageChange } from "./calculations";

export function getYearlyPercentageChangeRows(table, length) {
    for (let i = 0; i < length; i++) {
      if (i < Math.floor(table.length / 2)) {
        const columnOne = table[i];
        const columnTwo = table[Math.floor(table.length / 2) + i];
        table[i].percentChangeAverageSalesPrice = getPercentageChange(
          Number(columnOne.averageSalesPrice),
          Number(columnTwo.averageSalesPrice)
        );
        table[i].percentChangeMedianSalesPrice = getPercentageChange(
          Number(columnOne.medianSalesPrice),
          Number(columnTwo.medianSalesPrice)
        );
        table[i].percentChangeAveragePricePerSquareFoot = getPercentageChange(
          Number(columnOne.averagePricePerSquareFoot),
          Number(columnTwo.averagePricePerSquareFoot)
        );
        table[i].percentChangeAverageSquareFeet = getPercentageChange(
          Number(columnOne.averageSquareFeet),
          Number(columnTwo.averageSquareFeet)
        );
        table[i].percentChangeMedianSquareFeet = getPercentageChange(
          Number(columnOne.medianSquareFeet),
          Number(columnTwo.medianSquareFeet)
        );
      } else {
        table[i].percentChangeAverageSalesPrice = "-";
        table[i].percentChangeMedianSalesPrice = "-";
        table[i].percentChangeAveragePricePerSquareFoot = "-";
        table[i].percentChangeAverageSquareFeet = "-";
        table[i].percentChangeMedianSquareFeet = "-";
      }
    }
}

export function getQuarterlyPercentageChangeRows(table, length) {
  for (let i = 0; i < length; i++) {
    if (i < length - 1) {
      const columnOne = table[i];
      const columnTwo = table[i + 1];
      table[i].percentChangeAverageSalesPrice = getPercentageChange(
        Number(columnOne.averageSalesPrice),
        Number(columnTwo.averageSalesPrice)
      );
      table[i].percentChangeMedianSalesPrice = getPercentageChange(
        Number(columnOne.medianSalesPrice),
        Number(columnTwo.medianSalesPrice)
      );
      table[i].percentChangeAveragePricePerSquareFoot = getPercentageChange(
        Number(columnOne.averagePricePerSquareFoot),
        Number(columnTwo.averagePricePerSquareFoot)
      );
      table[i].percentChangeAverageSquareFeet = getPercentageChange(
        Number(columnOne.averageSquareFeet),
        Number(columnTwo.averageSquareFeet)
      );
      table[i].percentChangeMedianSquareFeet = getPercentageChange(
        Number(columnOne.medianSquareFeet),
        Number(columnTwo.medianSquareFeet)
      );
    } else {
      table[i].percentChangeAverageSalesPrice = "-";
      table[i].percentChangeMedianSalesPrice = "-";
      table[i].percentChangeAveragePricePerSquareFoot = "-";
      table[i].percentChangeAverageSquareFeet = "-";
      table[i].percentChangeMedianSquareFeet = "-";
    }
  }
}