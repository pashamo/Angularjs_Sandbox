import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-a4-odd',
    templateUrl: './odd.component.html',
    styles: [`p{color: firebrick;}`]
})

export class OddComponent {
    @Input() oddElement: number;
}