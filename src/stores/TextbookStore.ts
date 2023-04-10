import RootStore from "@/stores/RootStore";
import {action, makeAutoObservable} from "mobx";
import {Message} from "@/data/model/Message";
import {mockMessages} from "@/data/mock";

export default class CourseAptsStore {

    rootStore: RootStore;
    isOnCollaborativeMode = false;
    sidebarState : "closed" | "chat" | "threads" = "closed";

    messages : Message[] = mockMessages(10);

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    @action
    setCollaborativeMode = (isOnCollaborativeMode: boolean) => {
        console.log("setCollaborativeMode: " + isOnCollaborativeMode);
        this.isOnCollaborativeMode = isOnCollaborativeMode;
        if(!isOnCollaborativeMode) {
            this.sidebarState = "closed";
        }
    }

    @action
    setSidebarState = (sidebarState: "closed" | "chat" | "threads") => {
        this.sidebarState = sidebarState;
    };

}