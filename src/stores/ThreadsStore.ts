import RootStore from "@/stores/RootStore";
import { makeAutoObservable } from "mobx";
import {mockThreads} from "@/data/mock";
import {Thread} from "@/data/model/Thread";

export default class ThreadsStore {

    rootStore: RootStore;

    currentLoadedThreads: Thread[] = mockThreads(10);

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
}
