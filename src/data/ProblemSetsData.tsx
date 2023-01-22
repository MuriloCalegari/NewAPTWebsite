import {ProblemSet} from "@/data/model/ProblemSet";

export const problemSetsData: ProblemSet[] = [
    {
        id: 0,
        name: "Problem Set 1",
        percentageComplete: 50,
        apts: [
            {
                "id": 1,
                "name": "Totality APT",
                "difficulty": "MEDIUM",
                "status": "DONE",
                "problemStatement": "The phrases even keeled, odd job, and total eclipse might come to mind as you solve this APT. Given an array of int values, return the sum of those values that are at odd indexes, even indexes, or every index depending on whether the value of the String stype is \"odd\", \"even\", or \"all\", respectively. See examples for details.",
                "classCode": "public class Totality {\n    public int sum(int[] a, String stype) {\n        return 0;\n    }\n}",
                "constraints": "The array a[] will have between 2 and 50 values **(inclusive)**:\n * The sum of the values in a[] will be less than Integer.MAX_VALUE. \n * The value of String stype will be \"odd\", or \"even\", or \"all\"",
                "isQuizTaken": true,
                "testCases": [
                    {
                        id: 1,
                        aptId: 1,
                        "testNumber": 1,
                        "input": "a = [1,2,3,4,5], stype=\"odd\"",
                        "expectedOutput": "6",
                        "submission":
                            {
                                "testCaseNumber": 1,
                                "userOutput": "6",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                        "explanation": "The values 2 and 4 occur at odd indexes (indices 1 and 3, respectively)."
                    },
                    {
                        id: 2,
                        aptId: 1,
                        "testNumber": 2,
                        "input": "a = [1,2,3,4,5], stype=\"even\"",
                        "expectedOutput": "9",
                        "submission":
                            {
                                "testCaseNumber": 2,
                                "userOutput": "6",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                        "explanation": "The values 1, 3, and 5 occur at even indexes (0, 2, and 4, respectively)."
                    },
                ]
            },
        ]
    },
    {
        id: 1,
        name: "Problem Set 2",
        percentageComplete: 100,
        apts: [
        ]
    },
    {
        id: 2,
        name: "Problem Set 3",
        percentageComplete: 65,
        apts: [
        ]
    }
];

export interface RuntimeData {
    startingTime: number;
    endingTime: number;
    overallRuntimes: number[];
}

// Map containing mock data of runtime of different test cases for different APTs
// The key is the test case id
// The value is an array with the number of submissions on each chunk of the overall runtime interval
// on a total of 20 submission runtime groups
export const runtimeData = new Map<number, RuntimeData>(
    [
        [1, {
            startingTime: 0,
            endingTime: 200,
            overallRuntimes: [0, 2, 4, 5, 2, 1, 10, 16, 32, 25, 10, 25, 3, 2, 4, 4, 1, 3, 2, 0]
        }],
        [2, {
            startingTime: 0,
            endingTime: 200,
            overallRuntimes: [0, 2, 4, 5, 2, 1, 10, 16, 32, 25, 10, 25, 3, 2, 4, 4, 1, 3, 2, 0]
        }],
    ]
);

// Same thing as runtimeData, but for memory
export const memoryData = new Map<{ aptId: number, testCaseNumber: number }, number[]>(
    [
        [{ aptId: 1, testCaseNumber: 1 }, [0, 2, 4, 5, 2, 1, 10, 16, 32, 25, 10, 25, 3, 2, 4, 4, 1, 3, 2, 0]],
        [{ aptId: 1, testCaseNumber: 2 }, [0, 2, 4, 5, 2, 1, 10, 16, 32, 25, 10, 25, 3, 2, 4, 4, 1, 3, 2, 0]],
    ]
);