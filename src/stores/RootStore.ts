import CourseAptsStore from "@/stores/CourseAptsStore";
import TextbookStore from "./TextbookStore";
import UserStore from "@/stores/UserStore";

export default class RootStore {
    courseAptsStore: CourseAptsStore;
    textbookStore: TextbookStore;
    userStore: UserStore;

    constructor() {
        this.courseAptsStore = new CourseAptsStore(this);
        this.textbookStore = new TextbookStore(this);
        this.userStore = new UserStore(this);
    }
}