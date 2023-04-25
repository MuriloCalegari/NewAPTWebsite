import RootStore from "@/stores/RootStore";
import { action, makeAutoObservable } from "mobx";
import { Message } from "@/data/model/Message";
import { mockDifferentUsers, mockMessages, mockThreads } from "@/data/mock";
import { faker } from "@faker-js/faker";
import { User } from "@/data/model/User";
import { Thread } from "@/data/model/Thread";

export default class CourseAptsStore {

    rootStore: RootStore;
    isOnCollaborativeMode = false;
    sidebarState: "closed" | "chat" | "ask-ai" | "threads" = "closed";

    messages: Message[] = mockMessages(10);
    threads: Thread[] = mockThreads(10);

    users: User[] = mockDifferentUsers(10);

    activeThread: Thread | null = null;

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    @action
    setCollaborativeMode = (isOnCollaborativeMode: boolean) => {
        console.log("setCollaborativeMode: " + isOnCollaborativeMode);
        this.isOnCollaborativeMode = isOnCollaborativeMode;
        if (!isOnCollaborativeMode) {
            this.sidebarState = "closed";
        }
    }

    @action
    setSidebarState = (sidebarState: "closed" | "chat" | "ask-ai" | "threads") => {
        this.sidebarState = sidebarState;
    };

    @action
    sendMessage(message: Omit<Message, "id">) {

        const messageToSend: Message = {
            ...message,
            id: Number(faker.random.numeric())
        };

        this.messages.push(messageToSend);
    }

    @action
    setActiveThread(thread: Thread | null) {
        if (thread !== null) console.log("Setting active thread: " + thread.id);
        this.activeThread = thread;
    }

    @action
    sendMessageOnCurrentThread(message: string) {
        this.activeThread?.messages?.push(
            {
                user: this.rootStore.userStore.currentUser,
                content: message,
                id: Number(faker.random.numeric())
            }
        );
    }
}
