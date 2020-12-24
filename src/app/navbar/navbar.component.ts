import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();
  constructor() { }

  ngOnInit() {
  }

  // quando for clicado no botão reload, a output property irá avisar
  // o componente pai(appComponent), que por sua vez irá executar o comando associado
  refresh() {
    //trecho de código responsável por passar/comunicar para o componente pai mudança no valor
    this.onRefresh.emit();
  }

}
