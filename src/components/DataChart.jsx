import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const rgbMap = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(11, 92, 183, 0.5)',
    'rgba(11, 183, 34, 0.5)',
    'rgba(206, 235, 25, 0.5)',
    'rgba(235, 88, 25, 0.5)',
    'rgba(235, 25, 189, 0.5)',
    'rgba(0, 0, 0, 0.5)',
    'rgba(69, 69, 69, 0.5)',
];

const getDataSets = (titleArray, keyArray, tableColumns) => {
    let returnDataArray = [];

    for (let i = 0; i < titleArray.length; i++) {
        returnDataArray.push({
            label: titleArray[i],
            data: tableColumns.map((column) => column[keyArray[i]]),
            backgroundColor: rgbMap[i],
        });
    }

    console.log(returnDataArray);

    return returnDataArray;
};

export const DataChart = ({ tableColumns, dateConstant, title, titleArray, keyArray }) => {

    const data = {
        labels: dateConstant.map((date) => date.columnName),
        datasets: getDataSets(titleArray, keyArray, tableColumns),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: title,
            },
        },
        };


    return (
        <div>
            <Bar data={data} options={options}/>
        </div>
    );
}