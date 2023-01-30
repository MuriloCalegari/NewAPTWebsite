export class Submission {
    testCaseNumber!: number;
    userOutput!: string;
    timestamp!: number;
    runtime!: number;
    memory!: number;
}

export class TestCase {
    id!: number;
    aptId!: number;
    testNumber!: number;
    input!: string;
    expectedOutput!: string;
    reasonableWrongOutputs!: string[];
    submission!: Submission;
    explanation?: string;
}

export class Apt {
    id!: number;
    name!: string;
    difficulty!: "HARD" | "MEDIUM" | "EASY";
    status!: "DONE" | "INCOMPLETE" | "NOT_STARTED";
    problemStatement!: string;
    classCode!: string;
    constraints!: string;
    isQuizTaken!: boolean;
    testCases!: TestCase[];
}