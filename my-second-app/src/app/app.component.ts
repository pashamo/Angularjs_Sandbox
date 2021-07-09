import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newServerName: string;
  newServerContent: string;
  serverElements: any[] = [];

  onAddServer() {
    this.serverElements.push({
        "type": "server", 
        "sname": this.newServerName,
        "scontent": this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      "type": "blueprint",
      "sname": this.newServerName,
      "scontent": this.newServerContent
    });
  }
}
