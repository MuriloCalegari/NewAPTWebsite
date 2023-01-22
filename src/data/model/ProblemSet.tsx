import {Apt} from "@/data/model/Apt";

export class ProblemSet {
    id!: number;
    name!: string;
    percentageComplete!: number;
    apts!: Apt[];
}