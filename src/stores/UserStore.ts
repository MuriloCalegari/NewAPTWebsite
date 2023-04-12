import { makeAutoObservable } from "mobx";
import RootStore from "@/stores/RootStore";
import {User} from "@/data/model/User";
import {mockCurrentUser} from "@/data/mock";

export default class UserStore {
    rootStore: RootStore;

    currentUser: User = mockCurrentUser();

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
}
