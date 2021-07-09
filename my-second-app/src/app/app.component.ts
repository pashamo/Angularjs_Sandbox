import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', sname: 'Testserver', scontent: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
        this.serverElements.push({
            "type": "server", 
            "sname": serverData.serverName,
            "scontent": serverData.serverContent
        });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
        this.serverElements.push({
            "type": "blueprint",
            "sname": blueprintData.serverName,
            "scontent": blueprintData.serverContent
        });
  }
}
