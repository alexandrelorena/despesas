import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  months: string[] = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ];

  // months: string[] = [
  //   'Janeiro',
  //   'Fevereiro',
  //   'Março',
  //   'Abril',
  //   'Maio',
  //   'Junho',
  //   'Julho',
  //   'Agosto',
  //   'Setembro',
  //   'Outubro',
  //   'Novembro',
  //   'Dezembro',
  // ];

  @Output() monthSelected = new EventEmitter<string>();

  selectMonth(month: string) {
    this.monthSelected.emit(month);
  }
}
