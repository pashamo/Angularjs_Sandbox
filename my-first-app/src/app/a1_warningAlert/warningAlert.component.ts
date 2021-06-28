import { Component } from "@angular/core";

@Component({
    selector: 'app-a1-warning-alert',
    template: `
        <div class="alert alert-warning">
            <h1>WarningAlertComponent</h1>
        </div>`,
    styles: [`
        h1 {
            font-style: italic;
            color: firebrick;
            text-decoration: wavy;
            text-shadow: 2px 2px brown;
        } 
    `],
})

export class WarningAlertComponent {
    
}