import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NodesDetailComponent } from '../nodes-detail/nodes-detail.component';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent {
  @Input() node: any;
  constructor(private modalService: NgbModal) { }
  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }
  open(node) {
    // cria uma instancia de NodesDetailComponent e armazena dentro de modal
    // dentro de modal, tem uma referencia para o componente criado
    // através dessa instancia, é possivel passarmos valores para a API desse componente
    const modal = this.modalService.open(NodesDetailComponent);
    modal.componentInstance.node = node;
  }
}
