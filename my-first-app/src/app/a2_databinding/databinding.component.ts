import { Component } from "@angular/core";

@Component({
    selector: 'app-a2-databinding',
    templateUrl: './databinding.component.html'
})

export class DataBindingComponent {
    username: string = '';

    resetUsername() {
        this.username = '';
    }
}