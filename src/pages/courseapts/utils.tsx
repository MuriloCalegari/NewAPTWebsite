import React from "react";
import {getCorrectTestCasesCount, TestCase} from "@/data/model/Apt";
import {memoryData, PerformanceData, runtimeData} from "@/data/ProblemSetsData";
import {Stack, Tooltip, Whisper} from "rsuite";
import Star from "@rsuite/icons/legacy/Star";

export function getStarComponents(testCases: TestCase[]) {
    let starComponents: JSX.Element[] = [];

    if((getCorrectTestCasesCount(testCases) === testCases.length)) {
        starComponents.push(
            <Whisper
                placement="top"
                controlId="control-id-hover"
                trigger="hover"
                speaker={<Tooltip>
                    You got all tests right!
                </Tooltip>}
            >
                <Star color={"#ffb300"}/>
            </Whisper>
        );

        if (computeAverageRuntimeBeat(testCases) > 0.75) {
            starComponents.push(
                <Whisper
                    placement="top"
                    controlId="control-id-hover"
                    trigger="hover"
                    speaker={<Tooltip>
                        You beat 75% of people in terms of runtime!
                    </Tooltip>}
                >
                    <Star color={"#ffb300"}/>
                </Whisper>
            )
        }

        if (computeAverageMemoryBeat(testCases) > 0.75) {
            starComponents.push(
                <Whisper
                    placement="top"
                    controlId="control-id-hover"
                    trigger="hover"
                    speaker={<Tooltip>
                        You beat 75% of people in terms of memory consumption!
                    </Tooltip>}
                >
                    <Star color={"#ffb300"}/>
                </Whisper>
            )
        }
    }
    return starComponents;
}

export function getMotivatingComponent(testCases: TestCase[]) : JSX.Element {

    if (getCorrectTestCasesCount(testCases) !== testCases.length) {
        return <span> You are almost there!</span>;
    } else {

        let starComponents = getStarComponents(testCases);

        if(starComponents.length > 0) {
            return <Stack>
                {starComponents}
            </Stack>;
        } else {
            return <span>Congrats! You got it all right!</span>;
        }
    }
}

/**
 * Returns a value from 0 to 1 that represents the percentage of users that have a worse performance than the user
 * @param userPerformance
 * @param performanceData
 */
export function computeBeats(userPerformance: number, performanceData: PerformanceData | undefined) {
    if (performanceData) {
        const intervalSize = (performanceData.endingValue - performanceData.startingValue) / performanceData.overallData.length;

        const intervalIndex = Math.floor(userPerformance / intervalSize);

        let beats = 0;
        let totalValue = 0;

        for (let i = 0; i < performanceData.overallData.length; i++) {
            if (i < intervalIndex) beats += performanceData.overallData[i];
            totalValue += performanceData.overallData[i];
        }

        // rounds the value to 2 decimal places
        return Math.round(beats / totalValue * 10000) / 100;
    }
    return 0;
}

export function computeAverageRuntimeBeat(testCases: TestCase[]) {
    let totalBeats = 0;
    for (const testCase of testCases) {
        totalBeats += computeBeats(testCase.submission.runtime, runtimeData.get(testCase.id));
    }
    return totalBeats / testCases.length;
}

export function computeAverageMemoryBeat(testCases: TestCase[]) {
    let totalBeats = 0;
    for (const testCase of testCases) {
        totalBeats += computeBeats(testCase.submission.memory, memoryData.get(testCase.id));
    }
    return totalBeats / testCases.length;
}