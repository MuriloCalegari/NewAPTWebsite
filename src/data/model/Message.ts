export interface Message {
    id: number;
    user: {
        id: number;
        name: string;
        avatar: string;
    }
    content: string;
}