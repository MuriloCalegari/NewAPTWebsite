import CourseAptsStore from "@/stores/CourseAptsStore";
import TextbookStore from "./TextbookStore";
import UserStore from "@/stores/UserStore";
import ThreadsStore from "@/stores/ThreadsStore";

export default class RootStore {
    courseAptsStore: CourseAptsStore;
    textbookStore: TextbookStore;
    userStore: UserStore;
    threadsStore: ThreadsStore;

    constructor() {
        this.courseAptsStore = new CourseAptsStore(this);
        this.textbookStore = new TextbookStore(this);
        this.userStore = new UserStore(this);
        this.threadsStore = new ThreadsStore(this);
    }
}