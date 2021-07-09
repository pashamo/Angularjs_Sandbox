import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent {
    newServerName: string;
    newServerContent: string;

    constructor() {}

    ngOnInit() {}

    onAddServer() {
        // this.serverElements.push({
        //     "type": "server", 
        //     "sname": this.newServerName,
        //     "scontent": this.newServerContent
        // });
    }

    onAddBlueprint() {
        // this.serverElements.push({
        //     "type": "blueprint",
        //     "sname": this.newServerName,
        //     "scontent": this.newServerContent
        // });
    }
}