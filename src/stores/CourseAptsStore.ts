import RootStore from "@/stores/RootStore";
import {action, makeAutoObservable, observable} from "mobx";
import {Apt} from "@/data/model/Apt";

export default class CourseAptsStore {

    rootStore: RootStore;

    @observable isDrawerOpen = false;
    @observable currentLoadedApt : Apt | undefined = undefined;
    @observable shouldAnimateSubmissions = false;

    @observable isSubmitFileOpen = false;
    @observable isQuizModalOpen = false;

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    @action
    openDrawer = (aptToLoad?: Apt, shouldAnimateSubmissions? : boolean) => {
        this.isDrawerOpen = true;
        if(aptToLoad) {
            this.currentLoadedApt = aptToLoad;
        }

        if(shouldAnimateSubmissions !== undefined) {
            this.shouldAnimateSubmissions = shouldAnimateSubmissions;
        }
        console.log("openDrawer");
    }

    @action
    closeDrawer = () => {
        console.log("closeDrawer");
        this.isDrawerOpen = false;
        this.shouldAnimateSubmissions = false;
    }

    @action
    openSubmitFileModal = (aptToLoad : Apt | undefined) => {
        this.isSubmitFileOpen = true;
        this.currentLoadedApt = aptToLoad;
    }

    @action
    closeSubmitFileModal = () => {
        this.isSubmitFileOpen = false;
    }

    @action
    openQuizModal = () => {
        this.isQuizModalOpen = true
    }

    @action
    closeQuizModal = () => {
        this.isQuizModalOpen = false
    }

}