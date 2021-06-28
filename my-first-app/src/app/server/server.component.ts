import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    template: `
    <p 
        [ngStyle]="{ backgroundColor: getColour() }"
        [ngClass]="{ online: serverStatus === 'online'}">
        The ServerComponent - Server with id {{ serverID }} is {{ getServerStatus() }}</p>
    `,
    styles: [`
        .online {
            color: white;
        }
    `]
})

export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColour() {
        return this.serverStatus === 'online' ? 'green':'firebrick';
    }
}