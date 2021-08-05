import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-a4-game-control',
    templateUrl: './gamecontrol.component.html',
})

export class GameControlComponent {
    @Output() numberGen = new EventEmitter<{divisible: number, num: number}>();
    current: number = 0;
    clicked: boolean = false;
    ref;

    onStart() {
        this.clicked = false;
        this.ref = setInterval(() => {
            this.numberGen.emit({divisible: (this.current%2), num: this.current});
            this.current ++;
        }, 1000);
    }

    onStop() {
        clearInterval(this.ref);
        this.clicked = false;
    }

    onReset() {
        this.current = 0;
        this.clicked = false;
    }
}