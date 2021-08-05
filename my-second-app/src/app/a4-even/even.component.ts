import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-a4-even',
    templateUrl: './even.component.html',
    styles: [`p{color:teal;}`]
})

export class EvenComponent {
    @Input() evenElement: number;
}