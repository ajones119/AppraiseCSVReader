import { format } from "date-fns";
import {
  END_DATE,
  FOUR_TO_SIX_MONTHS,
  NINETEEN_TO_TWENTY_ONE_MONTHS,
  SEVEN_TO_NINE_MONTHS,
  SIXTEEN_TO_EIGHTEEN_MONTHS,
  START_DATE,
  STATUS_SOLD,
  TEN_TO_TWELVE_MONTHS,
  THIRTEEN_TO_FIFTEEN_MONTHS,
  THIRTEEN_TO_TWENTY_FOUR_MONTHS,
  TWENTY_TWO_TO_TWENTY_FOUR_MONTHS,
  ZERO_TO_THREE_MONTHS,
  ZERO_TO_TWELVE_MONTHS,
  ZERO_TO_TWENTY_FOUR_MONTHS,
} from "./constants";

function getMonthOffset(mode, order) {
  let offset = 0;

  if (order === START_DATE) {
    if (mode === ZERO_TO_TWELVE_MONTHS) {
      offset = 0;
    } else if (mode === THIRTEEN_TO_TWENTY_FOUR_MONTHS) {
      offset = 12;
    } else if (mode === ZERO_TO_TWENTY_FOUR_MONTHS) {
      offset = 0;
    } else if (mode === ZERO_TO_THREE_MONTHS) {
      offset = 0;
    } else if (mode === FOUR_TO_SIX_MONTHS) {
      offset = 3;
    } else if (mode === SEVEN_TO_NINE_MONTHS) {
      offset = 6;
    } else if (mode === TEN_TO_TWELVE_MONTHS) {
      offset = 9;
    } else if (mode === THIRTEEN_TO_FIFTEEN_MONTHS) {
      offset = 12;
    } else if (mode === SIXTEEN_TO_EIGHTEEN_MONTHS) {
      offset = 15;
    } else if (mode === NINETEEN_TO_TWENTY_ONE_MONTHS) {
      offset = 18;
    } else if (mode === TWENTY_TWO_TO_TWENTY_FOUR_MONTHS) {
      offset = 21;
    }
  } else {
    if (mode === ZERO_TO_TWELVE_MONTHS) {
      offset = 12;
    } else if (mode === THIRTEEN_TO_TWENTY_FOUR_MONTHS) {
      offset = 24;
    } else if (mode === ZERO_TO_TWENTY_FOUR_MONTHS) {
      offset = 24;
    } else if (mode === ZERO_TO_THREE_MONTHS) {
      offset = 3;
    } else if (mode === FOUR_TO_SIX_MONTHS) {
      offset = 6;
    } else if (mode === SEVEN_TO_NINE_MONTHS) {
      offset = 9;
    } else if (mode === TEN_TO_TWELVE_MONTHS) {
      offset = 12;
    } else if (mode === THIRTEEN_TO_FIFTEEN_MONTHS) {
      offset = 15;
    } else if (mode === SIXTEEN_TO_EIGHTEEN_MONTHS) {
      offset = 18;
    } else if (mode === NINETEEN_TO_TWENTY_ONE_MONTHS) {
      offset = 21;
    } else if (mode === TWENTY_TWO_TO_TWENTY_FOUR_MONTHS) {
      offset = 24;
    }
  }

  return offset;
}

export function calculateAverageSalesPrice(MLSDataEntries, forDisplay) {
  let returnString = "";
  let average = 0;
  let sum = 0;

  MLSDataEntries.forEach((entry) => {
    sum += entry.salePrice ? Number(entry.salePrice) : 0;
  });

  average = sum / MLSDataEntries.length;

  if (forDisplay) {
    returnString = average.toLocaleString();
    returnString = `$${returnString} (${MLSDataEntries.length} entries)`;
  } else {
    returnString = average;
  }

  return returnString;
}

export function calculateAveragePricePerSquareFoot(MLSDataEntries, forDisplay) {
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

  if (forDisplay) {
    returnString = average.toLocaleString();
    returnString = `$${returnString} (${pricePerSquareFootArray.length} entries)`;
  } else {
    returnString = average;
  }

  return returnString;
}

function getDate(startDate, mode, order) {
  let newDate = new Date(startDate);

  newDate.setMonth(newDate.getMonth() - getMonthOffset(mode, order));

  return newDate;
}

export function getAverage(
  MLSDataEntries = [],
  startDate,
  timeMode,
  calculateAverage,
  forDisplay = true
) {
  let startCutoffDate = getDate(startDate, timeMode, START_DATE);
  let endCutoffDate = getDate(startDate, timeMode, END_DATE);

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

  return calculateAverage(entriesArray, forDisplay);
}

export function getPercentageChange(
  firstTimePeriod,
  secondTimePeriod,
  startDate,
  MLSDataEntries,
  calculateAverage
) {
  let percentChange = 0;
  let returnString = "";

  const firstAverage = getAverage(
    MLSDataEntries,
    startDate,
    firstTimePeriod,
    calculateAverage,
    false
  );
  const secondAverage = getAverage(
    MLSDataEntries,
    startDate,
    secondTimePeriod,
    calculateAverage,
    false
  );

  if (firstAverage > secondAverage) {
    returnString += "+ ";
    percentChange = secondAverage / firstAverage;
  } else {
    returnString += "- ";
    percentChange = secondAverage / firstAverage;
  }

  percentChange = 1 - percentChange;
  percentChange = percentChange * 100;
  returnString += `${percentChange.toFixed(3)}%`;

  return returnString;
}

export function calculateMedian(MLSDataEntries, forDisplay) {
  let returnString = "";
  let median = 0;

  const middle = Math.floor(MLSDataEntries.length / 2),
    nums = [...MLSDataEntries].sort((a, b) => a - b);

  median =
    MLSDataEntries.length % 2 !== 0
      ? Number(nums[middle])
      : (Number(nums[middle - 1]) + Number(nums[middle])) / 2;

  returnString = median.toLocaleString();

  console.log(JSON.stringify(nums));

  return `${returnString} (${MLSDataEntries.length})`;
}

export function getMedian(
  MLSDataEntries = [],
  startDate,
  timeMode,
  calculateMedian,
  forDisplay = true
) {
  let startCutoffDate = getDate(startDate, timeMode, START_DATE);
  let endCutoffDate = getDate(startDate, timeMode, END_DATE);

  let entriesArray = [];
  MLSDataEntries.forEach((entry) => {
    if (
      entry.closingDate > endCutoffDate &&
      entry.closingDate < startCutoffDate &&
      entry.status === STATUS_SOLD
    ) {
      entriesArray.push(entry.salePrice);
    }
  });

  return calculateMedian(entriesArray, forDisplay);
}
