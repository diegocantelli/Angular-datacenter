import {
  Component, ViewChild, ComponentFactoryResolver, ComponentRef,
  ViewContainerRef
} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alertRef: ComponentRef<AlertComponent>;
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;

  // viewcontainerRef -> é uma referência para um elemento na aplicação
  // que nos dá um ponto de referência onde pode ser renderizado o componente de alerta

  // viewChild -> torna possível referenciar um elemento na controller
  // como um tipo ViewContainerRef, dando acesso às apis necessárias
  // para renderizar Componentes
  @ViewChild('alertBox', { read: ViewContainerRef }) alertBox:
    ViewContainerRef;

  constructor(private ComponentFactoryResolver: ComponentFactoryResolver) { }

  alert(date) {
    if (!this.alertRef) {
      //cria uma instância de Alert Componente
      const alertComponent = this.ComponentFactoryResolver.
        resolveComponentFactory(AlertComponent);

      //this.alertBox -> mantém uma referência para onde o componente deverá ser renderizado
      //this.alertRef -> mantém uma referência para o componente já criado dentro da HostView, no caso
      //a referência da variável de template  
      this.alertRef = this.alertBox.createComponent(alertComponent);
    }
    this.alertRef.instance.date = date;
    //foi preciso chamar o changeDetector pois na linha acima a input property
    //foi atualizada manualmente
    this.alertRef.changeDetectorRef.detectChanges();
    setTimeout(() => this.destroyAlert(), 5000);
  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }
  refresh() {
    this.dashboard.generateData();
  }
}