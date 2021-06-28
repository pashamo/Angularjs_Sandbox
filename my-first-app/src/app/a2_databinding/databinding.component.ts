import { Component } from "@angular/core";

@Component({
    selector: 'app-a2-databinding',
    templateUrl: './databinding.component.html'
})

export class DataBindingComponent {
    username: string = '';
    isEmpty: boolean = true;

    isUsernameEmpty() {
        if (this.username.length > 0) {
            this.isEmpty = false;
        } else {
            this.isEmpty = true;
        }
    }

    resetUsername() {
        this.username = '';
        this.isUsernameEmpty();
    }
}