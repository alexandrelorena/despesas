import { Component, Input, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';
import { DespesasService } from '../../services/despesas.service';

interface Despesa {
  status: any;
  vencimento: string | number | Date;
  id: number;
  descricao: string;
  valor: number;
  data: Date; // Adapte conforme suas necessidades
}

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent implements OnInit {
  @Input() selectedMonth: string = '';
  despesas: Despesa[] = [];
  totalDespesas: number = 0;

  monthNames: { [key: string]: string } = {
    jan: 'janeiro',
    fev: 'fevereiro',
    mar: 'março',
    abr: 'abril',
    mai: 'maio',
    jun: 'junho',
    jul: 'julho',
    ago: 'agosto',
    set: 'setembro',
    out: 'outubro',
    nov: 'novembro',
    dez: 'dezembro',
  };

  constructor(
    private dateService: DateService,
    private despesaService: DespesasService
  ) {}

  ngOnInit() {
    this.dateService.selectedMonth$.subscribe((month) => {
      this.selectedMonth = month;
      this.getDespesas(month);
    });
  }

  getFullMonthName(): string {
    return this.monthNames[this.selectedMonth] || this.selectedMonth;
  }

  getDespesas(month: string) {
    this.despesaService.getDespesasByMonth(month).subscribe(
      (despesas: Despesa[]) => {
        this.despesas = despesas;
        this.calcularTotalDespesas();
      },
      (error: any) => {
        console.error('Erro ao buscar despesas:', error);
      }
    );
  }

  calcularTotalDespesas() {
    this.totalDespesas = this.despesas.reduce(
      (acc, despesa) => acc + despesa.valor,
      0
    );
  }

  editarDespesa(despesa: Despesa) {
    console.log('Editando despesa:', despesa);
    // Lógica de edição
  }

  removerDespesa(despesa: Despesa) {
    this.despesas = this.despesas.filter((d) => d.id !== despesa.id);
    this.calcularTotalDespesas();
  }
}

// import { Component, Input } from '@angular/core';
// import { DateService } from '../../services/date.service';
// import { DespesasService } from '../../services/despesas.service';

// @Component({
//   selector: 'app-month',
//   templateUrl: './month.component.html',
//   styleUrls: ['./month.component.css'],
// })
// export class MonthComponent {
//   @Input() selectedMonth: string = '';
//   despesas: any[] = [];
//   totalDespesas: number = 0;
//   // getDespesas: any;

//   monthNames: { [key: string]: string } = {
//     jan: 'janeiro',
//     fev: 'fevereiro',
//     mar: 'março',
//     abr: 'abril',
//     mai: 'maio',
//     jun: 'junho',
//     jul: 'julho',
//     ago: 'agosto',
//     set: 'setembro',
//     out: 'outubro',
//     nov: 'novembro',
//     dez: 'dezembro',
//   };
//   // editarDespesa: any;
//   // removerDespesa: any;

//   constructor(
//     private dateService: DateService, // Injeta o DateService para obter o mês
//     private despesaService: DespesasService // Injeta o DespesaService para buscar as despesas
//   ) {}
//   ngOnInit() {
//     this.dateService.selectedMonth$.subscribe((month) => {
//       this.selectedMonth = month; // Atualiza o mês selecionado ao receber do serviço
//       this.getDespesas(month);
//     });
//     // Adicionar uma despesa manualmente para teste
//     this.despesas.push({ descricao: 'Compra de supermercado', valor: 150.0 });
//     this.calcularTotalDespesas(); // Atualiza o total
//   }

//   getFullMonthName(): string {
//     return this.monthNames[this.selectedMonth] || this.selectedMonth; // Retorna o nome completo ou a abreviação se não encontrar
//   }
//   getDespesas(month: string) {
//     this.despesaService.getDespesasByMonth(month).subscribe(
//       (despesas: any[]) => {
//         this.despesas = despesas;
//         this.totalDespesas = despesas.reduce(
//           (total: any, despesa: { valor: any }) => total + despesa.valor,
//           0
//         );
//       },
//       (error: any) => {
//         console.error('Erro ao buscar despesas:', error);
//       }
//     );
//   }
//   calcularTotalDespesas() {
//     this.totalDespesas = this.despesas.reduce(
//       (acc, despesa) => acc + despesa.valor,
//       0
//     );
//   }

//   editarDespesa(despesa: any) {
//     console.log('Editando despesa:', despesa);
//     // Adicione sua lógica de edição aqui
//   }

//   removerDespesa(despesa: any) {
//     console.log('Removendo despesa:', despesa);
//     // Adicione sua lógica de remoção aqui
//   }
// }
