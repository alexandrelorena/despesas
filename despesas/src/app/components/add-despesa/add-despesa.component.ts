import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Despesas } from '../../models/despesas.model'; // Altere o caminho se necessário

import { DespesasService } from '../../services/despesas.service';

@Component({
  selector: 'app-add-despesa',
  templateUrl: './add-despesa.component.html',
  styleUrls: ['./add-despesa.component.css'],
})
export class AddDespesaComponent implements OnInit {
  addDespesaForm!: FormGroup;
  userId: number = 1; // Defina o ID do usuário atual (ou obtenha de um serviço de autenticação)

  constructor(
    private fb: FormBuilder,
    private despesasService: DespesasService
  ) {}

  ngOnInit(): void {
    this.addDespesaForm = this.fb.group({
      descricao: ['', Validators.required],
      valor: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      data: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addDespesaForm.valid) {
      const despesa: Despesas = {
        user_id: this.userId, // Adicionando o ID do usuário
        description: this.addDespesaForm.value.descricao,
        amount: this.addDespesaForm.value.valor,
        expense_date: this.addDespesaForm.value.data,
      };

      this.despesasService.addDespesa(despesa).subscribe(
        (response) => {
          console.log('Despesa adicionada com sucesso!', response);
          // Lógica adicional após adicionar
        },
        (error) => {
          console.error('Erro ao adicionar despesa:', error);
        }
      );
    }
  }
}
