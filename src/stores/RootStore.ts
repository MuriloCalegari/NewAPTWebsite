import CourseAptsStore from "@/stores/CourseAptsStore";
import TextbookStore from "./TextbookStore";

export default class RootStore {
    courseAptsStore: CourseAptsStore;
    textbookStore: TextbookStore;

    constructor() {
        this.courseAptsStore = new CourseAptsStore(this);
        this.textbookStore = new TextbookStore(this);
    }
}