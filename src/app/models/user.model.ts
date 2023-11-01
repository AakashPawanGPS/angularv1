export class User {
    avatar_url: string;
    login: string;

    constructor(avatar_url: string, login: string) {
        this.avatar_url = avatar_url;
        this.login = login;
    }
}