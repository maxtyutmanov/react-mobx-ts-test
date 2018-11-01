import { action, observable } from 'mobx';

export class CurrentUserStore {
    @observable public userName?: string

    @observable get isLoggedIn(): boolean {
        if (this.userName) {
            return true;
        }
        return false;
    }

    public logIn(userName: string) {
        action(() => {
            this.userName = userName;
        });
    }

    public logOut() {
        action(() => {
            this.userName = undefined;
        });
    }
}