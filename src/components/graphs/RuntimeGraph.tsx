import {observer} from "mobx-react-lite";
import Chart from "react-apexcharts";
import React from "react";
import {RuntimeData} from "@/data/ProblemSetsData";

const defaultOptions = {
    chart: {
        fontFamily: 'inherit',
        parentHeightOffset: 0,
        toolbar: {
            show: false
        },
        animations: {
            enabled: false
        },
        stacked: true
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1
    },
    grid: {
        xaxis: {
            lines: {
                show: false
            }
        }
    },
    xaxis: {
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
    },
    yaxis: {
        labels: {
            padding: 4
        }
    },
    colors: ["#2589F5", "#D9D9D9"],
    legend: {
        show: false
    }
};

export interface RuntimeGraphProps {
    userRuntime: number;
    runtimeData?: RuntimeData;
    options?: any;
    labels?: string[];
    height?: number;
}

export const RuntimeGraph = observer(({userRuntime, runtimeData, options, labels, height} : RuntimeGraphProps) => {
    console.log("Rendering RuntimeGraph");
    console.log(runtimeData);

    //Combine the userRuntime and runtimeData into a single array named data
    const data = [
        {
            name: 'User Runtime',
            data: runtimeData ? constructUserRuntimeArray(userRuntime, runtimeData) : []
        },
        {
            name: 'Average Runtime',
            data: runtimeData?.overallRuntimes ? constructOverallRuntimeArray(userRuntime, runtimeData) : []
        }
    ];

    console.log(data);

    return (
        <Chart
            series={data}
            type="bar"
            height={height ? height : 200}
            options={Object.assign({}, defaultOptions, options, { labels })}
        />
    );
});

// Goes through the runtime data and find the interval where the user runtime is
// It sets all values to zero except the interval where the user runtime is,
// where it sets it to the same value as the overall runtime to match the height on the graph
// Example:
// runtime = 45
// runtimeData =
// {
//  startingTime: 0,
//  endingTime: 200,
//  overallRuntimes: [0, 2, 4, 5, 2, 1, 10, 16, 32, 25, 10, 25, 3, 2, 4, 4, 1, 3, 2, 0]
// }
// Output:
// [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] (each chunk corresponds to a 10 ms interval)
function constructUserRuntimeArray(runtime : number, runtimeData : RuntimeData)  {
    const intervalCount = runtimeData.overallRuntimes.length;
    const intervalSize = (runtimeData.endingTime - runtimeData.startingTime) / intervalCount;
    const intervalIndex = Math.floor(runtime / intervalSize);
    const runtimeArray = new Array(intervalCount).fill(0);
    runtimeArray[intervalIndex] = runtimeData.overallRuntimes[intervalIndex];
    return runtimeArray;
}

function constructOverallRuntimeArray(runtime : number, runtimeData : RuntimeData) {
    const intervalCount = runtimeData.overallRuntimes.length;
    const intervalSize = (runtimeData.endingTime - runtimeData.startingTime) / intervalCount;
    const intervalIndex = Math.floor(runtime / intervalSize);
    // Create a copy of the array
    const runtimeArray = [...runtimeData.overallRuntimes];
    runtimeArray[intervalIndex] = 0;
    return runtimeArray;
}