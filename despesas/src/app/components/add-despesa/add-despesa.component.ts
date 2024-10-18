import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-despesa',
  templateUrl: './add-despesa.component.html',
  styleUrls: ['./add-despesa.component.css'],
})
export class AddDespesaComponent implements OnInit {
  addDespesaForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addDespesaForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      vencimento: ['', Validators.required],
      repeticao: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addDespesaForm.valid) {
      console.log(this.addDespesaForm.value);
      // Lógica para envio dos dados
    }
  }
}
