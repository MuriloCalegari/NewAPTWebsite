import RootStore from "@/stores/RootStore";
import {makeAutoObservable} from "mobx";

export default class CourseAptsStore {

    rootStore: RootStore;

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

}