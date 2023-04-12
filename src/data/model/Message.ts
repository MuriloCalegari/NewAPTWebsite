import {User} from "@/data/model/User";

export interface Message {
    id: number;
    user: User;
    content: string;
}