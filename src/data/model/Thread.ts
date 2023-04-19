import {User} from "@/data/model/User";
import {Message} from "@/data/model/Message";

export interface Thread {
    id: number;
    title: string;
    user: User;
    relatedTextbookContent: string;
    contentBody: string;
    messages?: Message[];
}