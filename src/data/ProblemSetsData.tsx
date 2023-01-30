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
                "difficulty": "EASY",
                "status": "DONE",
                "problemStatement": "The phrases even keeled, odd job, and total eclipse might come to mind as you solve this APT. Given an array of int values, return the sum of those values that are at odd indexes, even indexes, or every index depending on whether the value of the String stype is **_\"odd\"_**, **_\"even\"_**, or **_\"all\"_**, respectively. See examples for details.",
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
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
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
                        reasonableWrongOutputs: ["6", "15", "0", "1", "2"],
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
                    {
                        id: 3,
                        aptId: 1,
                        "testNumber": 3,
                        "input": "a = {1,2,3,4,5}, stype = \"all\"",
                        "expectedOutput": "15",
                        reasonableWrongOutputs: ["6", "9", "0", "1", "2"],
                        "submission":
                            {
                                "testCaseNumber": 3,
                                "userOutput": "6",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                    },
                    {
                        id: 4,
                        aptId: 1,
                        "testNumber": 4,
                        "input": "a = {22, 23}, stype = \"even\"",
                        "expectedOutput": "22",
                        reasonableWrongOutputs: ["6", "9", "0", "1", "2"],
                        "submission":
                            {
                                "testCaseNumber": 4,
                                "userOutput": "22",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                    },
                ],
            },
            {
                "id": 2,
                "name": "AccessLevel APT",
                "difficulty": "EASY",
                "status": "DONE",
                "problemStatement": "The phrases even keeled, odd job, and total eclipse might come to mind as you solve this APT. Given an array of int values, return the sum of those values that are at odd indexes, even indexes, or every index depending on whether the value of the String stype is **_\"odd\"_**, **_\"even\"_**, or **_\"all\"_**, respectively. See examples for details.",
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
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
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
                        reasonableWrongOutputs: ["6", "15", "0", "1", "2"],
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
                    {
                        id: 3,
                        aptId: 1,
                        "testNumber": 3,
                        "input": "a = {1,2,3,4,5}, stype = \"all\"",
                        "expectedOutput": "15",
                        reasonableWrongOutputs: ["6", "9", "0", "1", "2"],
                        "submission":
                            {
                                "testCaseNumber": 3,
                                "userOutput": "6",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                    },
                    {
                        id: 4,
                        aptId: 1,
                        "testNumber": 4,
                        "input": "a = {22, 23}, stype = \"even\"",
                        "expectedOutput": "22",
                        reasonableWrongOutputs: ["6", "9", "0", "1", "2"],
                        "submission":
                            {
                                "testCaseNumber": 4,
                                "userOutput": "22",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                    },
                ]
            },
            {
                "id": 3,
                "name": "Gravity APT",
                "difficulty": "MEDIUM",
                "status": "DONE",
                "problemStatement": "The phrases even keeled, odd job, and total eclipse might come to mind as you solve this APT. Given an array of int values, return the sum of those values that are at odd indexes, even indexes, or every index depending on whether the value of the String stype is **_\"odd\"_**, **_\"even\"_**, or **_\"all\"_**, respectively. See examples for details.",
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
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
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
                        reasonableWrongOutputs: ["6", "15", "0", "1", "2"],
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
                    {
                        id: 3,
                        aptId: 1,
                        "testNumber": 3,
                        "input": "a = {1,2,3,4,5}, stype = \"all\"",
                        "expectedOutput": "15",
                        reasonableWrongOutputs: ["6", "9", "0", "1", "2"],
                        "submission":
                            {
                                "testCaseNumber": 3,
                                "userOutput": "6",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                    },
                    {
                        id: 4,
                        aptId: 1,
                        "testNumber": 4,
                        "input": "a = {22, 23}, stype = \"even\"",
                        "expectedOutput": "22",
                        reasonableWrongOutputs: ["6", "9", "0", "1", "2"],
                        "submission":
                            {
                                "testCaseNumber": 4,
                                "userOutput": "22",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                    },
                ]
            },
            {
                "id": 4,
                "name": "Starter APT",
                "difficulty": "HARD",
                "status": "DONE",
                "problemStatement": "The phrases even keeled, odd job, and total eclipse might come to mind as you solve this APT. Given an array of int values, return the sum of those values that are at odd indexes, even indexes, or every index depending on whether the value of the String stype is **_\"odd\"_**, **_\"even\"_**, or **_\"all\"_**, respectively. See examples for details.",
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
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
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
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
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
                    {
                        id: 3,
                        aptId: 1,
                        "testNumber": 3,
                        "input": "a = {1,2,3,4,5}, stype = \"all\"",
                        "expectedOutput": "15",
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
                        "submission":
                            {
                                "testCaseNumber": 3,
                                "userOutput": "6",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                    },
                    {
                        id: 4,
                        aptId: 1,
                        "testNumber": 4,
                        "input": "a = {22, 23}, stype = \"even\"",
                        "expectedOutput": "22",
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
                        "submission":
                            {
                                "testCaseNumber": 4,
                                "userOutput": "22",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                    },
                ]
            },
            {
                "id": 5,
                "name": "CirclesCountry APT",
                "difficulty": "HARD",
                "status": "DONE",
                "problemStatement": "The phrases even keeled, odd job, and total eclipse might come to mind as you solve this APT. Given an array of int values, return the sum of those values that are at odd indexes, even indexes, or every index depending on whether the value of the String stype is **_\"odd\"_**, **_\"even\"_**, or **_\"all\"_**, respectively. See examples for details.",
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
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
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
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
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
                    {
                        id: 3,
                        aptId: 1,
                        "testNumber": 3,
                        "input": "a = {1,2,3,4,5}, stype = \"all\"",
                        "expectedOutput": "15",
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
                        "submission":
                            {
                                "testCaseNumber": 3,
                                "userOutput": "6",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
                    },
                    {
                        id: 4,
                        aptId: 1,
                        "testNumber": 4,
                        "input": "a = {22, 23}, stype = \"even\"",
                        "expectedOutput": "22",
                        reasonableWrongOutputs: ["9", "15", "0", "1", "2"],
                        "submission":
                            {
                                "testCaseNumber": 4,
                                "userOutput": "22",
                                "timestamp": 1623168600000,
                                "runtime": 45,
                                "memory": 128
                            },
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
            {
                "id": 4,
                "name": "Prime Numbers APT",
                "difficulty": "MEDIUM",
                "status": "INCOMPLETE",
                "problemStatement": "Write a function that checks if a given number is a prime number.",
                "classCode": "public class PrimeNumbers {\n public boolean isPrime(int number) {\n return false;\n }\n}",
                "constraints": "The input number will be between 2 and 10^6 (inclusive).",
                "isQuizTaken": false,
                "testCases": [
                    {
                        id: 1,
                        aptId: 4,
                        "testNumber": 1,
                        "input": "number = 2",
                        "expectedOutput": "true",
                        reasonableWrongOutputs: ["false"],
                        "submission": {
                            "testCaseNumber": 1,
                            "userOutput": "true",
                            "timestamp": 1623168600000,
                            "runtime": 45,
                            "memory": 128
                        },
                        "explanation": "2 is a prime number."
                    },
                    {
                        id: 1,
                        aptId: 4,
                        "testNumber": 1,
                        "input": "number = 7",
                        "expectedOutput": "true",
                        reasonableWrongOutputs: ["false"],
                        "submission": {
                            "testCaseNumber": 1,
                            "userOutput": "false",
                            "timestamp": 1623168600000,
                            "runtime": 45,
                            "memory": 128
                        },
                        "explanation": "7 is a prime number."
                    },
                    {
                        id: 1,
                        aptId: 4,
                        "testNumber": 1,
                        "input": "number = 10",
                        "expectedOutput": "false",
                        reasonableWrongOutputs: ["true"],
                        "submission": {
                            "testCaseNumber": 1,
                            "userOutput": "6",
                            "timestamp": 1623168600000,
                            "runtime": 45,
                            "memory": 128
                        },
                        "explanation": "10 is not a prime number."
                    }
                ]
            }
        ]
    }
];

export interface PerformanceData {
    startingValue: number;
    endingValue: number;
    overallData: number[];
}

// Map containing mock data of runtime of different test cases for different APTs
// The key is the test case id
// The value is an array with the number of submissions on each chunk of the overall runtime interval
// on a total of 20 submission runtime groups
export const runtimeData = new Map<number, PerformanceData>(
    [
        [1, {
            startingValue: 0,
            endingValue: 200,
            overallData: [4, 12, 4, 5, 2, 1, 10, 16, 40, 25, 10, 25, 3, 2, 4, 4, 1, 3, 2, 6]
        }],
        [2, {
            startingValue: 0,
            endingValue: 200,
            overallData: [10, 2, 4, 5, 2, 1, 10, 16, 32, 25, 10, 25, 3, 2, 4, 4, 1, 3, 2, 6]
        }],
    ]
);

// Same thing as runtimeData, but for memory
export const memoryData = new Map<number, PerformanceData>(
    [
        [1, {
            startingValue: 0,
            endingValue: 200,
            overallData: [4, 12, 4, 5, 2, 1, 10, 16, 40, 25, 10, 25, 3, 2, 4, 4, 1, 3, 2, 6]
        }],
        [2, {
            startingValue: 0,
            endingValue: 200,
            overallData: [10, 2, 4, 5, 2, 1, 10, 16, 32, 25, 10, 25, 3, 2, 4, 4, 1, 3, 2, 5]
        }],
    ]
);