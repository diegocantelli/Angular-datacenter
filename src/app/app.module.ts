import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentComponent } from './component/component.component';
import { MetricComponent } from './metric/metric.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodesRowComponent } from './nodes-row/nodes-row.component';
import { NodesDetailComponent } from './nodes-detail/nodes-detail.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ComponentComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent,
    NodesDetailComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  //informa ao Angular quais componentes poderão ser criados dinamicamente
  entryComponents: [
    NodesDetailComponent,
    AlertComponent
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
