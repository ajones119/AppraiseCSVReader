import { STATUS_SOLD } from "./constants";

export function calculateAverage(MLSDataEntries) {
  let returnString = "";
  let average = 0;
  let sum = 0;

  MLSDataEntries.forEach((entry) => {
    sum += entry ? Number(entry) : 0;
  });

  average = sum / MLSDataEntries.length;

  returnString = average;

  return returnString;
}

export function calculateAverageSalesPrice(MLSDataEntries) {
  let returnString = "";
  let average = 0;
  let sum = 0;

  MLSDataEntries.forEach((entry) => {
    sum += entry.salePrice ? Number(entry.salePrice) : 0;
  });

  average = sum / MLSDataEntries.length;

  returnString = average;

  return returnString;
}

export function calculateAverageYearBuilt(MLSDataEntries) {
  let returnString = "";
  let average = 0;
  let sum = 0;

  MLSDataEntries.forEach((entry) => {
    sum += entry.yearBuilt ? Number(entry.yearBuilt) : 0;
  });

  average = sum / MLSDataEntries.length;

  returnString = average;

  return returnString;
}

export function calculateAveragePricePerSquareFoot(MLSDataEntries) {
  let returnString = "";
  let average = 0;
  let sum = 0;
  let pricePerSquareFootArray = [];

  MLSDataEntries.forEach((entry) => {
    pricePerSquareFootArray.push(entry.salePrice / entry.GLA);
  });

  pricePerSquareFootArray.forEach((entry) => {
    sum += entry;
  });

  average = sum / pricePerSquareFootArray.length;

  returnString = average;

  return returnString;
}

export function calculateAverageSquareFeet(MLSDataEntries) {
  //check for empty GLAs => Skip Empty?
  let returnString = "";
  let average = 0;
  let sum = 0;

  MLSDataEntries.forEach((entry) => {
    sum += entry.GLA ? Number(entry.GLA) : 0;
  });

  average = sum / MLSDataEntries.length;

  returnString = average;

  return returnString;
}

function getDate(startDate, offset) {
  let newDate = new Date(startDate);

  newDate.setMonth(newDate.getMonth() - offset);

  return newDate;
}

export function getNumberOfEntries(
  MLSDataEntries = [],
  startDate,
  lowOffset,
  highOffset
) {
  let startCutoffDate = getDate(startDate, lowOffset);
  let endCutoffDate = getDate(startDate, highOffset);

  let entriesArray = [];
  MLSDataEntries.forEach((entry) => {
    if (
      entry.closingDate > endCutoffDate &&
      entry.closingDate < startCutoffDate &&
      entry.status === STATUS_SOLD
    ) {
      entriesArray.push(entry);
    }
  });

  return entriesArray.length;
}

export function getAverage(
  MLSDataEntries = [],
  startDate,
  lowOffset,
  highOffset,
  calculateAverage
) {
  let startCutoffDate = getDate(startDate, lowOffset);
  let endCutoffDate = getDate(startDate, highOffset);

  let entriesArray = [];
  MLSDataEntries.forEach((entry) => {
    if (
      entry.closingDate > endCutoffDate &&
      entry.closingDate < startCutoffDate &&
      entry.status === STATUS_SOLD
    ) {
      entriesArray.push(entry);
    }
  });

  return calculateAverage(entriesArray);
}

export function getPercentageChange(firstNumber, secondNumber) {
  let percentChange = 0;
  let returnString = "";

  percentChange = (firstNumber - secondNumber) / firstNumber;

  if (percentChange >= 0) {
    returnString += "+ ";
  }

  percentChange = percentChange * 100;
  returnString += `${percentChange.toFixed(3)}%`;

  return returnString;
}

export function calculateMedian(MLSDataEntries) {
  let returnString = "";
  let median = 0;

  const middle = Math.floor(MLSDataEntries.length / 2),
    nums = [...MLSDataEntries].sort((a, b) => a - b);

  median =
    MLSDataEntries.length % 2 !== 0
      ? Number(nums[middle])
      : (Number(nums[middle - 1]) + Number(nums[middle])) / 2;

  returnString = median;

  return returnString;
}

export function calculateMode(MLSDataEntries) {
  let returnObject = {};
  let counts = {};

  const sortedArray = [...MLSDataEntries].sort((a, b) => a - b);
  returnObject.min = sortedArray[0];
  returnObject.max = sortedArray[sortedArray.length - 1];

  for (let i = 0; i < sortedArray.length; i++) {
    counts[sortedArray[i]] = (counts[sortedArray[i]] || 0) + 1;
  }

  let max = 0;
  let values = [];
  for (let key in counts) {
    if (counts.hasOwnProperty(key)) {
      if (counts[key] > max) {
        max = counts[key];
        values = [key];
      } else if (counts[key] === max) {
        max = counts[key];
        values.push(key);
      }
    }
  }

  if (values.length > 1) {
    returnObject.mode = calculateAverage(values);
  } else {
    returnObject.mode = values[0];
  }

  return returnObject;
}

export function getMedian(
  MLSDataEntries = [],
  startDate,
  lowOffset,
  highOffset,
  medianKey
) {
  let startCutoffDate = getDate(startDate, lowOffset);
  let endCutoffDate = getDate(startDate, highOffset);

  let entriesArray = [];
  MLSDataEntries.forEach((entry) => {
    if (
      entry.closingDate > endCutoffDate &&
      entry.closingDate < startCutoffDate &&
      entry.status === STATUS_SOLD
    ) {
      entriesArray.push(entry[medianKey]);
    }
  });

  return calculateMedian(entriesArray);
}

export function getMode(
  MLSDataEntries = [],
  startDate,
  lowOffset,
  highOffset,
  medianKey
) {
  let startCutoffDate = getDate(startDate, lowOffset);
  let endCutoffDate = getDate(startDate, highOffset);

  let entriesArray = [];
  MLSDataEntries.forEach((entry) => {
    if (
      entry.closingDate > endCutoffDate &&
      entry.closingDate < startCutoffDate &&
      entry.status === STATUS_SOLD
    ) {
      entriesArray.push(entry[medianKey]);
    }
  });

  return calculateMode(entriesArray);
}
