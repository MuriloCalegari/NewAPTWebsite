import RootStore from "@/stores/RootStore";
import {action, makeAutoObservable, observable} from "mobx";
import {Apt} from "@/data/model/Apt";

export default class CourseAptsStore {

    rootStore: RootStore;

    @observable isDrawerOpen = false;
    @observable currentLoadedApt : Apt | undefined = undefined;

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    @action
    openDrawer = (aptToLoad : Apt) => {
        this.isDrawerOpen = true;
        this.currentLoadedApt = aptToLoad;
        console.log("openDrawer");
    }

    @action
    closeDrawer = () => {
        console.log("closeDrawer");
        this.isDrawerOpen = false;
    }
}