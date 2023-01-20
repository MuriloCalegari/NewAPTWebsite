import CourseAptsStore from "@/stores/CourseAptsStore";

export default class RootStore {
    courseAptsStore: CourseAptsStore;

    constructor() {
        this.courseAptsStore = new CourseAptsStore(this);
    }
}