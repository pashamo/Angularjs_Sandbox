import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    template: `<p>The ServerComponent - Server with id {{ serverID }} is {{ getServerStatus() }}</p>`
})

export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = 'offline';

    getServerStatus = () => this.serverStatus;
}