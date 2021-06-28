import { Component } from '@angular/core';

@Component({
    selector: 'app-a3-directives',
    templateUrl: './directives.component.html',
    styles: [`
        .plusFive {
            color: white;
        }
    `]
})

export class DirectivesComponent {
    isClick = false;
    counter = 0;
    btn_message = 'Display Details';
    click_log: Date[] = [];

    toggleClick() {
        this.isClick = !this.isClick;
        this.btn_message = this.isClick ? 'Hide Details' : 'Display Details';
        this.counter ++;
        this.click_log.push(new Date());
    }
}