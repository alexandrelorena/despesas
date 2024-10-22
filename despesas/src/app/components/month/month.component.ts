import { Component, Input } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent {
  selectedMonth: string = '';

  constructor(private dateService: DateService) {} // Injeta o DateService

  ngOnInit() {
    this.dateService.selectedMonth$.subscribe((month) => {
      this.selectedMonth = month; // Atualiza o mês selecionado ao receber do serviço
    });
  }
}
