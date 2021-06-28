import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
// import { SuccessAlertComponent } from './a1_successAlert/successAlert.component';
// import { WarningAlertComponent } from './a1_warningAlert/warningAlert.component';
// import { DataBindingComponent } from './a2_databinding/databinding.component';
// import { DirectivesComponent } from './a3_directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    // SuccessAlertComponent,
    // WarningAlertComponent,
    // DataBindingComponent,
    // DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
