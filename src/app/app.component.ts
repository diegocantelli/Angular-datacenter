import { Component, ViewChild } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // viewchild permite que um componente seja acessado através do controller
  //viewchild só permite selecionar os filhos diretos, nesse caso os filhos diretos de app.component.html
  // enquanto que ao usar template variable permite apenas o acesso do componente através de uma chamada na view
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;
  title = 'app';

  refresh() {
    this.dashboard.generateData();
  }
}
